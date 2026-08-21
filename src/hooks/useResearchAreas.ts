import { type ResearchProgram } from "../types";

export const useResearchAreas = (): ResearchProgram[] => [
  { id: "1", title: "Plant Cell, Tissue & Organ Culture", description: "In vitro propagation and morphogenesis studies of indigenous plant species.", catalogId: "CGPBL-RES-001" },
  { id: "2", title: "Genetic Engineering & Genome Editing", description: "Precision modifications for crop improvement and climate resilience.", catalogId: "CGPBL-RES-002" },
  { id: "3", title: "Cytology & Cytogenetics", description: "Analyzing chromosomal dynamics and structural variations in germplasm.", catalogId: "CGPBL-RES-003" },
  { id: "4", title: "Systems Biology", description: "Mapping complex interaction networks underlying plant developmental pathways.", catalogId: "CGPBL-RES-004" },
  { id: "5", title: "Bioinformatics", description: "Computational modeling of genetic data to identify actionable genomic markers.", catalogId: "CGPBL-RES-005" },
  { id: "6", title: "Artificial Intelligence", description: "Integrating machine learning to predict plant-environment responses at scale.", catalogId: "CGPBL-RES-006" },
];
