import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type LabMember } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/lab_members')({
  component: LabMembersAdmin,
});

function LabMembersAdmin() {
  return (
    <GenericCRUD<LabMember>
      tableName="lab_members"
      title="Lab Members"
      columns={[
        { key: 'full_name', label: 'Name' },
        { key: 'role', label: 'Role' },
        { key: 'category', label: 'Category' },
        { key: 'display_order', label: 'Order' },
      ]}
      formFields={[
        { key: 'full_name', label: 'Full Name' },
        { 
          key: 'role', 
          label: 'Role', 
          options: ['Lab PI', 'Lab Co-PI I', 'Lab Co-PI II', 'Faculty', 'Researcher', 'PhD Student', 'MPhil Student', 'MS Student', 'Undergraduate', 'Supporting Staff', 'Alumni'] 
        },
        { key: 'category', label: 'Category', options: ['current', 'alumni'] },
        { key: 'alumni_year', label: 'Alumni Year', type: 'number' },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'photo_url', label: 'Photo URL' },
        { key: 'bio', label: 'Bio', type: 'textarea' },
        { key: 'display_order', label: 'Display Order', type: 'number' },
      ]}
      defaultValues={{ 
        category: 'current', 
        role: 'Researcher', 
        display_order: 0,
        alumni_year: null,
        bio: '',
        photo_url: '',
        email: ''
      }}
    />
  );
}
