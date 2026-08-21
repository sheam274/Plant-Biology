-- Seed script for CGPBL with correct column names

-- 1. Lab PI
INSERT INTO public.lab_members (full_name, role, category, bio, email, display_order)
VALUES ('Prof. Abdullah Mohammad Shohael, PhD', 'Lab PI', 'current', 'Professor, Department of Biotechnology & Genetic Engineering, Jahangirnagar University. Visiting Research Fellow, International Rice Research Institute. Research interests: cisgenic/transgenic plant development, genome editing, cryopreservation, genetic engineering, proteomics, cell genetics, natural products, stress physiology, bio-diesel production, medicinal plants, bioreactor culture, antimicrobial research, frugal science, science communication, microbiology, bioinformatics, metabolomics.', 'amshohael@juniv.edu', 1);

-- 2. Research Programs
INSERT INTO public.research_programs (title, summary, body, catalog_code, track, display_order)
VALUES 
('Bioreactor Facilities', 'Top-quality bioreactors ready for commercial plant cell production.', '', 'FAC-01', 'Facilities', 1),
('Napier Transformation Program', 'Current flagship research focus of the lab, developing Napier grass for fodder improvement.', '', 'NAP-00', 'Ongoing Research', 1),
('Lead of AI', 'AI-driven protein structure prediction, reducing work that used to take months or years to minutes or hours.', '', 'COMP-01', 'Lab Co-PI I', 2),
('Lead Bioinformatician', 'Tools and methods for data management, visualization, integration, analysis, and prediction across growing plant-science datasets.', '', 'COMP-02', 'Lab Co-PI I', 3);

-- 3. Publications
INSERT INTO public.publications (title, authors, journal, year, doi_or_link, catalog_code)
VALUES 
('Risk factors and actionable molecular signatures in COVID-19-associated lung adenocarcinoma and lung squamous cell carcinoma patients', 'Ullah, M. A., Alam, Moin, A. T., Ahamed, T., Shohael, A. M.', 'Computers in Biology and Medicine', 2023, '10.1016/j.compbiomed.2023.106855', 'PUB-2023-01'),
('Evaluation of growth and some unexplored bioactivities of bioreactor-grown adventitious root culture of ginseng (Panax ginseng A. Meyer)', 'Ahmed, S., Shohael, A. M., Paek, K. Y.', 'Biotechnology and Applied Biochemistry', 2021, null, 'PUB-2021-01'),
('Prevalence and impact of comorbidities on disease prognosis among patients with COVID-19 in Bangladesh: A nationwide study amid the second wave', 'Sharif, N., Opu, R. R., et al., Shohael, A. M., et al.', 'Diabetes & Metabolic Syndrome: Clinical Research & Reviews', 2021, null, 'PUB-2021-02'),
('In vitro analysis of phytoconstituents and bioactivities of Senna alata leaf extracts', 'Ahmed, S., Rahman, F. B., Shohael, A. M.', 'Discovery Phytomedicine', 2021, null, 'PUB-2021-03'),
('A comprehensive in silico exploration of pharmacological properties, bioactivities and COX-2 inhibitory potential of eleutheroside B from Eleutherococcus senticosus', 'Ahmed, S., Moni, D. A., Sonawane, K. D., Paek, K. Y., Shohael, A. M.', 'Journal of Biomolecular Structure and Dynamics', 2020, '10.1080/07391102.2020.1803135', 'PUB-2020-01'),
('Comparative phytochemical, antioxidant, and antibacterial study of different parts of Doigota plants (Bixa orellana L.)', 'Ahmed, S., Moni, B. M., Ahmed, S., Gomes, D. J., Shohael, A. M.', 'Bulletin of the National Research Centre', 2020, '10.1186/s42269-020-00349-1', 'PUB-2020-02'),
('Genetic parameter on callus induction and plant regeneration using three explants in four rice cultivars of Bangladesh', 'Alam, F., Khatun, S. M., Khondokar, I. A., Shohael, A. M., Parvez, S., Khalekuzzaman, M.', 'Bangladesh Journal of Genetics and Biotechnology', 2002, null, 'PUB-2002-01');

-- 4. Blog Posts
INSERT INTO public.blog_posts (title, excerpt, body, slug, category, published_at)
VALUES 
('Fully Funded PhD Opportunity in Genome Editing at Jahangirnagar University', 'Confirm still relevant/open before republishing', 'Content coming soon', 'phd-opportunity-genome-editing', 'Biotechnology', '2025-03-13T00:00:00Z'),
('A Green Gesture: Dr. Shohael Gifts Hydroponic Lettuce to the Vice-Chancellor of Sher-e-Bangla Agricultural University, Bhuiyan', 'Event recap', 'Content coming soon', 'green-gesture-hydroponic-lettuce', 'Biotechnology', '2024-01-21T00:00:00Z'),
('Why Plant Biotechnology Research is Important in 2023', 'Perspective piece', 'Content coming soon', 'importance-plant-biotechnology-2023', 'Latest', '2023-01-03T00:00:00Z');

-- 5. Outreach Programs
INSERT INTO public.outreach_programs (title, description, program_type, event_date)
VALUES 
('Python Programming Workshop', '15-module course covering Python basics to statistical analysis with NumPy and Pandas. Instructor: Tanjim Taharat Aurpa.', 'Training', '2026-10-12'),
('Foldscope Frugal Science', 'Foldscope is an ultra-affordable, portable paper microscope performing on par with conventional research microscopes.', 'Frugal Science', '2026-09-01');

-- 6. Collaborations
INSERT INTO public.collaborations (partner_name, partner_type, description)
VALUES ('Science Porter Bangladesh', 'NGO', 'Regular co-organizer of the lab''s seminars and workshops.');
