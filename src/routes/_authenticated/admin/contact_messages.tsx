import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type ContactMessage } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/contact_messages')({
  component: ContactMessagesAdmin,
});

function ContactMessagesAdmin() {
  return (
    <GenericCRUD<ContactMessage>
      tableName="contact_messages"
      title="Contact Messages"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'submitted_at', label: 'Submitted', render: (val) => new Date(val).toLocaleString() },
      ]}
      formFields={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'message', label: 'Message', type: 'textarea' },
      ]}
      defaultValues={{}}
    />
  );
}
