import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type ResearchProgram } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/research_programs')({
  component: ResearchProgramsAdmin,
});

function ResearchProgramsAdmin() {
  return (
    <GenericCRUD<ResearchProgram>
      tableName="research_programs"
      title="Research Programs"
      columns={[
        { key: 'catalog_code', label: 'Code' },
        { key: 'title', label: 'Title' },
        { key: 'track', label: 'Track' },
        { key: 'display_order', label: 'Order' },
      ]}
      formFields={[
        { key: 'catalog_code', label: 'Catalog Code (e.g. NAP-01)' },
        { key: 'title', label: 'Title' },
        { 
          key: 'track', 
          label: 'Track', 
          options: ['Lab Co-PI I', 'Lab Co-PI II', 'Ongoing Research', 'Facilities'] 
        },
        { key: 'summary', label: 'Summary', type: 'textarea' },
        { key: 'body', label: 'Full Body Content', type: 'textarea' },
        { key: 'cover_image_url', label: 'Cover Image URL' },
        { key: 'display_order', label: 'Display Order', type: 'number' },
      ]}
      defaultValues={{ 
        track: 'Ongoing Research',
        display_order: 0,
        parent_program_id: null
      }}
    />
  );
}
