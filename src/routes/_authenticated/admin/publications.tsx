import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type Publication } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/publications')({
  component: PublicationsAdmin,
});

function PublicationsAdmin() {
  return (
    <GenericCRUD<Publication>
      tableName="publications"
      title="Publications"
      columns={[
        { key: 'catalog_code', label: 'Code' },
        { key: 'title', label: 'Title' },
        { key: 'journal', label: 'Journal' },
        { key: 'year', label: 'Year' },
      ]}
      formFields={[
        { key: 'catalog_code', label: 'Catalog Code (e.g. PUB-2024-11)' },
        { key: 'title', label: 'Title' },
        { key: 'authors', label: 'Authors' },
        { key: 'journal', label: 'Journal' },
        { key: 'year', label: 'Year', type: 'number' },
        { key: 'doi_or_link', label: 'DOI or Link' },
        { key: 'abstract', label: 'Abstract', type: 'textarea' },
      ]}
      defaultValues={{ 
        year: new Date().getFullYear()
      }}
    />
  );
}
