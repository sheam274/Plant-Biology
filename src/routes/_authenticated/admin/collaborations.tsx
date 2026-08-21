import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type Collaboration } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/collaborations')({
  component: CollaborationsAdmin,
});

function CollaborationsAdmin() {
  return (
    <GenericCRUD<Collaboration>
      tableName="collaborations"
      title="Collaborations"
      columns={[
        { key: 'partner_name', label: 'Partner' },
        { key: 'partner_type', label: 'Type' },
      ]}
      formFields={[
        { key: 'partner_name', label: 'Partner Name' },
        { 
          key: 'partner_type', 
          label: 'Type', 
          options: ['University', 'Funding Agency', 'Industry', 'NGO'] 
        },
        { key: 'logo_url', label: 'Logo URL' },
        { key: 'website_url', label: 'Website URL' },
        { key: 'description', label: 'Description', type: 'textarea' },
      ]}
      defaultValues={{ 
        partner_type: 'University'
      }}
    />
  );
}
