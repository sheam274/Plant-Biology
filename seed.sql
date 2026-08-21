-- Seed script for CGPBL
-- Note: catalog_id vs catalog_code. The migration used catalog_id. 
-- The app types used catalog_code. I will use the migration names.

-- 1. Lab PI
INSERT INTO public.lab_members (name, role, bio, catalog_id, status, display_order)
VALUES ('Prof. Abdullah Mohammad Shohael, PhD', 'Lab PI', 'Professor, Department of Biotechnology & Genetic Engineering, Jahangirnagar University. Visiting Research Fellow, International Rice Research Institute. Research interests: cisgenic/transgenic plant development, genome editing, cryopreservation, genetic engineering, proteomics, cell genetics, natural products, stress physiology, bio-diesel production, medicinal plants, bioreactor culture, antimicrobial research, frugal science, science communication, microbiology, bioinformatics, metabolomics.', 'MEM-001', 'active', 1)
ON CONFLICT (catalog_id) DO NOTHING;

-- 2. Research Programs
INSERT INTO public.research_programs (title, description, catalog_id, category)
VALUES 
('Bioreactor Facilities', 'Top-quality bioreactors ready for commercial plant cell production.', 'FAC-01', 'Facilities'),
('Napier Transformation Program', 'Current flagship research focus of the lab, developing Napier grass for fodder improvement.', 'NAP-00', 'Ongoing Research'),
('Lead of AI', 'AI-driven protein structure prediction, reducing work that used to take months or years to minutes or hours.', 'COMP-01', 'Lab Co-PI I'),
('Lead Bioinformatician', 'Tools and methods for data management, visualization, integration, analysis, and prediction across growing plant-science datasets.', 'COMP-02', 'Lab Co-PI I')
ON CONFLICT (catalog_id) DO NOTHING;

-- 3. Publications
INSERT INTO public.publications (title, authors, journal, year, url, catalog_id)
VALUES 
('Risk factors and actionable molecular signatures in COVID-19-associated lung adenocarcinoma and lung squamous cell carcinoma patients', ARRAY['Ullah, M. A.', 'Alam', 'Moin, A. T.', 'Ahamed, T.', 'Shohael, A. M.'], 'Computers in Biology and Medicine', 2023, 'https://doi.org/10.1016/j.compbiomed.2023.106855', 'PUB-2023-01'),
('Evaluation of growth and some unexplored bioactivities of bioreactor-grown adventitious root culture of ginseng (Panax ginseng A. Meyer)', ARRAY['Ahmed, S.', 'Shohael, A. M.', 'Paek, K. Y.'], 'Biotechnology and Applied Biochemistry', 2021, null, 'PUB-2021-01'),
('Prevalence and impact of comorbidities on disease prognosis among patients with COVID-19 in Bangladesh: A nationwide study amid the second wave', ARRAY['Sharif, N.', 'Opu, R. R.', 'et al.', 'Shohael, A. M.', 'et al.'], 'Diabetes & Metabolic Syndrome: Clinical Research & Reviews', 2021, null, 'PUB-2021-02'),
('In vitro analysis of phytoconstituents and bioactivities of Senna alata leaf extracts', ARRAY['Ahmed, S.', 'Rahman, F. B.', 'Shohael, A. M.'], 'Discovery Phytomedicine', 2021, null, 'PUB-2021-03'),
('A comprehensive in silico exploration of pharmacological properties, bioactivities and COX-2 inhibitory potential of eleutheroside B from Eleutherococcus senticosus', ARRAY['Ahmed, S.', 'Moni, D. A.', 'Sonawane, K. D.', 'Paek, K. Y.', 'Shohael, A. M.'], 'Journal of Biomolecular Structure and Dynamics', 2020, 'https://doi.org/10.1080/07391102.2020.1803135', 'PUB-2020-01'),
('Comparative phytochemical, antioxidant, and antibacterial study of different parts of Doigota plants (Bixa orellana L.)', ARRAY['Ahmed, S.', 'Moni, B. M.', 'Ahmed, S.', 'Gomes, D. J.', 'Shohael, A. M.'], 'Bulletin of the National Research Centre', 2020, 'https://doi.org/10.1186/s42269-020-00349-1', 'PUB-2020-02'),
('Genetic parameter on callus induction and plant regeneration using three explants in four rice cultivars of Bangladesh', ARRAY['Alam, F.', 'Khatun, S. M.', 'Khondokar, I. A.', 'Shohael, A. M.', 'Parvez, S.', 'Khalekuzzaman, M.'], 'Bangladesh Journal of Genetics and Biotechnology', 2002, null, 'PUB-2002-01')
ON CONFLICT (catalog_id) DO NOTHING;

-- 4. Blog Posts
INSERT INTO public.blog_posts (title, excerpt, content, date, catalog_id)
VALUES 
('Fully Funded PhD Opportunity in Genome Editing at Jahangirnagar University', 'Confirm still relevant/open before republishing', 'Content coming soon', '2025-03-13', 'POST-2025-01'),
('A Green Gesture: Dr. Shohael Gifts Hydroponic Lettuce to the Vice-Chancellor of Sher-e-Bangla Agricultural University, Bhuiyan', 'Event recap', 'Content coming soon', '2024-01-21', 'POST-2024-01'),
('Why Plant Biotechnology Research is Important in 2023', 'Perspective piece', 'Content coming soon', '2023-01-03', 'POST-2023-01')
ON CONFLICT (catalog_id) DO NOTHING;

-- 5. Outreach Events
INSERT INTO public.outreach_events (title, description, date, catalog_id)
VALUES 
('Python Programming Workshop', '15-module course covering Python basics to statistical analysis with NumPy and Pandas. Instructor: Tanjim Taharat Aurpa.', '2026-10-12', 'OUT-2026-01'),
('Foldscope Frugal Science', 'Foldscope is an ultra-affordable, portable paper microscope performing on par with conventional research microscopes.', '2026-09-01', 'OUT-2026-02')
ON CONFLICT (catalog_id) DO NOTHING;
