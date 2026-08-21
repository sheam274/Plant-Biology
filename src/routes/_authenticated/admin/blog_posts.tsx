import { createFileRoute } from '@tanstack/react-router';
import { GenericCRUD } from '@/components/admin/GenericCRUD';
import { type BlogPost } from '@/types';

export const Route = createFileRoute('/_authenticated/admin/blog_posts')({
  component: BlogPostsAdmin,
});

function BlogPostsAdmin() {
  return (
    <GenericCRUD<BlogPost>
      tableName="blog_posts"
      title="Blog Posts"
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'category', label: 'Category' },
        { key: 'slug', label: 'Slug' },
      ]}
      formFields={[
        { key: 'title', label: 'Title' },
        { key: 'slug', label: 'Slug' },
        { key: 'category', label: 'Category' },
        { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
        { key: 'body', label: 'Content', type: 'textarea' },
        { key: 'cover_image_url', label: 'Cover Image URL' },
        { key: 'published_at', label: 'Published At', type: 'datetime-local' },
        { key: 'author_id', label: 'Author ID (UUID)' },
      ]}
      defaultValues={{ 
        category: 'Biotechnology',
        published_at: new Date().toISOString().slice(0, 16)
      }}
    />
  );
}
