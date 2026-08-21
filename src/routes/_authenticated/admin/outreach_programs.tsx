import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type OutreachProgram } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/outreach_programs')({
  component: OutreachAdmin,
});

function OutreachAdmin() {
  return (
    <GenericCRUD<OutreachProgram>
      tableName="outreach_programs"
      title="Outreach Programs"
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'program_type', label: 'Type' },
        { key: 'event_date', label: 'Date' },
      ]}
      formFields={[
        { key: 'title', label: 'Title' },
        { 
          key: 'program_type', 
          label: 'Type', 
          options: ['Training', 'Internship', 'Seminar', 'Biosafety', 'Frugal Science'] 
        },
        { key: 'description', label: 'Description', type: 'textarea' },
        { key: 'cover_image_url', label: 'Cover Image URL' },
        { key: 'event_date', label: 'Event Date', type: 'date' },
      ]}
      defaultValues={{ 
        program_type: 'Training'
      }}
    />
  );
}
