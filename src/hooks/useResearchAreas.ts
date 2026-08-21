import { type ResearchProgram } from "../types";

export const useResearchAreas = (): ResearchProgram[] => [
  { id: "1", catalog_code: "CGPBL-RES-001", title: "Plant Cell, Tissue & Organ Culture", track: "Ongoing Research", parent_program_id: null, summary: "In vitro propagation and morphogenesis studies of indigenous plant species.", body: "", cover_image_url: null, display_order: 1 },
  { id: "2", catalog_code: "CGPBL-RES-002", title: "Genetic Engineering & Genome Editing", track: "Ongoing Research", parent_program_id: null, summary: "Precision modifications for crop improvement and climate resilience.", body: "", cover_image_url: null, display_order: 2 },
  { id: "3", catalog_code: "CGPBL-RES-003", title: "Cytology & Cytogenetics", track: "Ongoing Research", parent_program_id: null, summary: "Analyzing chromosomal dynamics and structural variations in germplasm.", body: "", cover_image_url: null, display_order: 3 },
  { id: "4", catalog_code: "CGPBL-RES-004", title: "Systems Biology", track: "Ongoing Research", parent_program_id: null, summary: "Mapping complex interaction networks underlying plant developmental pathways.", body: "", cover_image_url: null, display_order: 4 },
  { id: "5", catalog_code: "CGPBL-RES-005", title: "Bioinformatics", track: "Ongoing Research", parent_program_id: null, summary: "Computational modeling of genetic data to identify actionable genomic markers.", body: "", cover_image_url: null, display_order: 5 },
  { id: "6", catalog_code: "CGPBL-RES-006", title: "Artificial Intelligence", track: "Ongoing Research", parent_program_id: null, summary: "Integrating machine learning to predict plant-environment responses at scale.", body: "", cover_image_url: null, display_order: 6 },
];
