export type SpecimenID = string;

export type LabMemberRole = 
  | 'Lab PI' 
  | 'Lab Co-PI I' 
  | 'Lab Co-PI II' 
  | 'Faculty' 
  | 'Researcher' 
  | 'PhD Student' 
  | 'MPhil Student' 
  | 'MS Student' 
  | 'Undergraduate' 
  | 'Supporting Staff' 
  | 'Alumni';

export type LabMemberCategory = 'current' | 'alumni';

export interface LabMember {
  id: string;
  catalog_code: string;
  full_name: string;
  role: LabMemberRole;
  category: LabMemberCategory;
  alumni_year: number | null;
  bio: string | null;
  photo_url: string | null;
  email: string | null;
  display_order: number;
  created_at: string;
}

export type ResearchTrack = 'Lab Co-PI I' | 'Lab Co-PI II' | 'Ongoing Research' | 'Facilities';

export interface ResearchProgram {
  id: string;
  catalog_code: string;
  title: string;
  track: ResearchTrack;
  parent_program_id: string | null;
  summary: string;
  body: string;
  cover_image_url: string | null;
  display_order: number;
}

export interface Publication {
  id: string;
  catalog_code: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi_or_link: string | null;
  abstract: string | null;
}

export type CollaborationType = 'University' | 'Funding Agency' | 'Industry' | 'NGO';

export interface Collaboration {
  id: string;
  partner_name: string;
  partner_type: CollaborationType;
  logo_url: string | null;
  description: string | null;
  website_url: string | null;
}

export interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  album: string;
  taken_at: string | null;
  display_order: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string | null;
  body: string;
  cover_image_url: string | null;
  published_at: string | null;
  author_id: string | null;
}

export type OutreachProgramType = 'Training' | 'Internship' | 'Seminar' | 'Biosafety' | 'Frugal Science';

export interface OutreachProgram {
  id: string;
  program_type: OutreachProgramType;
  title: string;
  description: string;
  cover_image_url: string | null;
  event_date: string | null;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  submitted_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}
