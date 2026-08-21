import React from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface GenericCRUDProps<T extends { id: string }> {
  tableName: string;
  title: string;
  columns: { key: keyof T; label: string; render?: (val: any) => React.ReactNode }[];
  formFields: { key: keyof T; label: string; type?: string; options?: string[] }[];
  defaultValues: Partial<T>;
}

export function GenericCRUD<T extends { id: string }>({ 
  tableName, 
  title, 
  columns, 
  formFields,
  defaultValues 
}: GenericCRUDProps<T>) {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState<Partial<T> | null>(null);
  const [isDeleting, setIsDeleting] = React.useState<string | null>(null);

  const { data: items, isLoading } = useQuery({
    queryKey: [tableName],
    queryFn: async () => {
      // @ts-ignore - Dynamic table name access
      const { data, error } = await supabase.from(tableName as any).select('*');
      if (error) throw error;
      return (data as any) as T[];
    }
  });

  const upsertMutation = useMutation({
    mutationFn: async (payload: Partial<T>) => {
      // @ts-ignore - Dynamic table name access
      const { error } = await supabase.from(tableName as any).upsert(payload as any);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
      setIsOpen(false);
      setEditingItem(null);
      toast.success('Record saved successfully');
    },
    onError: (error: any) => {
      toast.error(error.message);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      // @ts-ignore - Dynamic table name access
      const { error } = await supabase.from(tableName as any).delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tableName] });
      toast.success('Record deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSettled: () => setIsDeleting(null)
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload: any = editingItem?.id ? { id: editingItem.id } : {};
    
    formFields.forEach(field => {
      const val = formData.get(field.key as string);
      payload[field.key] = field.type === 'number' ? Number(val) : val;
    });

    upsertMutation.mutate(payload);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="Fraunces text-3xl text-primary">{title}</h2>
          <p className="text-primary-soft mono-data text-[10px] uppercase">Catalog Entry Management</p>
        </div>
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) setEditingItem(null); }}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary-soft text-white mono-data text-xs gap-2">
              <Plus size={16} /> ADD NEW ENTRY
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-white border-line max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="Fraunces text-2xl text-primary">
                {editingItem ? 'Edit Entry' : 'New Entry'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 pt-4">
              {formFields.map(field => (
                <div key={field.key as string} className="space-y-1">
                  <label className="text-[10px] mono-data uppercase text-primary-soft">{field.label}</label>
                  {field.options ? (
                    <select 
                      name={field.key as string} 
                      className="w-full border border-line p-2 rounded-sm text-sm bg-white"
                      defaultValue={editingItem ? (editingItem[field.key] as any) : defaultValues[field.key]}
                    >
                      {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea 
                      name={field.key as string}
                      defaultValue={editingItem ? (editingItem[field.key] as any) : defaultValues[field.key]}
                      className="w-full border border-line p-2 rounded-sm text-sm min-h-[100px]"
                    />
                  ) : (
                    <Input 
                      name={field.key as string} 
                      type={field.type || 'text'}
                      defaultValue={editingItem ? (editingItem[field.key] as any) : defaultValues[field.key]}
                      className="border-line focus:ring-amber"
                      required={!['parent_program_id', 'alumni_year', 'bio', 'photo_url', 'email', 'cover_image_url', 'doi_or_link', 'abstract', 'logo_url', 'website_url', 'description', 'excerpt', 'published_at', 'author_id', 'event_date', 'taken_at'].includes(field.key as string)}
                    />
                  )}
                </div>
              ))}
              <div className="col-span-2 pt-4">
                <Button 
                  type="submit" 
                  disabled={upsertMutation.isPending}
                  className="w-full bg-primary hover:bg-primary-soft text-white mono-data"
                >
                  {upsertMutation.isPending ? <Loader2 className="animate-spin" /> : 'SAVE ENTRY'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border border-line rounded-sm bg-white overflow-x-auto">
        <Table>
          <TableHeader className="bg-surface/50">
            <TableRow className="border-line">
              {columns.map(col => (
                <TableHead key={col.key as string} className="mono-data text-[10px] uppercase text-primary font-bold">
                  {col.label}
                </TableHead>
              ))}
              <TableHead className="mono-data text-[10px] uppercase text-primary font-bold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={columns.length + 1} className="text-center py-8 mono-data text-xs">LOADING CATALOG...</TableCell></TableRow>
            ) : items?.length === 0 ? (
              <TableRow><TableCell colSpan={columns.length + 1} className="text-center py-8 mono-data text-xs">NO ENTRIES FOUND</TableCell></TableRow>
            ) : items?.map((item) => (
              <TableRow key={item.id} className="border-line hover:bg-surface/20">
                {columns.map(col => (
                  <TableCell key={col.key as string} className="text-sm text-primary max-w-[200px] truncate">
                    {col.render ? col.render(item[col.key]) : (item[col.key] as any)}
                  </TableCell>
                ))}
                <TableCell className="text-right space-x-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => { setEditingItem(item); setIsOpen(true); }}
                    className="h-8 w-8 text-primary-soft hover:text-amber"
                  >
                    <Pencil size={14} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => { if(confirm('Delete this entry?')) { setIsDeleting(item.id); deleteMutation.mutate(item.id); } }}
                    disabled={isDeleting === item.id}
                    className="h-8 w-8 text-primary-soft hover:text-red-500"
                  >
                    {isDeleting === item.id ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
