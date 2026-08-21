import { type BlogPost } from "../types";

export const useBlogPosts = (): BlogPost[] => [
  { id: "1", title: "Advancements in Genome Editing", excerpt: "Exploring recent shifts in CRISPR/Cas9 efficiency...", date: "2024-11-15", catalogId: "PUB-2024-11" },
  { id: "2", title: "Root System Architecture Study", excerpt: "New findings on localized stress responses in tropical flora...", date: "2024-10-02", catalogId: "PUB-2024-10" },
  { id: "3", title: "Annual Lab Symposium Recap", excerpt: "Collaborations and future directions discussed at this year's event...", date: "2024-09-20", catalogId: "PUB-2024-09" },
];
