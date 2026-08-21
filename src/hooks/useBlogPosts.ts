import { type BlogPost } from "../types";

export const useBlogPosts = (): BlogPost[] => [
  { id: "1", slug: "advancements-genome-editing", title: "Advancements in Genome Editing", category: "Latest", excerpt: "Exploring recent shifts in CRISPR/Cas9 efficiency...", body: "", cover_image_url: null, published_at: "2024-11-15T00:00:00Z", author_id: null },
  { id: "2", slug: "root-system-architecture", title: "Root System Architecture Study", category: "Biotechnology", excerpt: "New findings on localized stress responses in tropical flora...", body: "", cover_image_url: null, published_at: "2024-10-02T00:00:00Z", author_id: null },
  { id: "3", slug: "annual-lab-symposium", title: "Annual Lab Symposium Recap", category: "Latest", excerpt: "Collaborations and future directions discussed at this year's event...", body: "", cover_image_url: null, published_at: "2024-09-20T00:00:00Z", author_id: null },
];
