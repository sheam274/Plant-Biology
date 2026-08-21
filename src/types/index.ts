export type SpecimenID = string;

export interface LabMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  catalogId: SpecimenID;
}

export interface ResearchProgram {
  id: string;
  title: string;
  description: string;
  catalogId: SpecimenID;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  catalogId: SpecimenID;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  catalogId: SpecimenID;
}
