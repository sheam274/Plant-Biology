import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type NewsletterSubscriber } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/newsletter_subscribers')({
  component: SubscribersAdmin,
});

function SubscribersAdmin() {
  return (
    <GenericCRUD<NewsletterSubscriber>
      tableName="newsletter_subscribers"
      title="Newsletter Subscribers"
      columns={[
        { key: 'email', label: 'Email' },
        { key: 'subscribed_at', label: 'Subscribed', render: (val) => new Date(val).toLocaleString() },
      ]}
      formFields={[
        { key: 'email', label: 'Email', type: 'email' },
      ]}
      defaultValues={{}}
    />
  );
}
