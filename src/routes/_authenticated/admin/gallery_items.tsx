import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type GalleryItem } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/gallery_items')({
  component: GalleryAdmin,
});

function GalleryAdmin() {
  return (
    <GenericCRUD<GalleryItem>
      tableName="gallery_items"
      title="Gallery Items"
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'album', label: 'Album' },
        { key: 'taken_at', label: 'Date' },
      ]}
      formFields={[
        { key: 'title', label: 'Title' },
        { key: 'image_url', label: 'Image URL' },
        { key: 'album', label: 'Album', options: ['Lab Facilities', 'Outreach Programs', 'Field Work'] },
        { key: 'taken_at', label: 'Date Taken', type: 'date' },
        { key: 'display_order', label: 'Order', type: 'number' },
      ]}
      defaultValues={{ 
        album: 'Lab Facilities',
        display_order: 0
      }}
    />
  );
}
