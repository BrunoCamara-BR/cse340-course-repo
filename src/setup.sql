-- ========================================
-- Organization Table
-- ========================================
CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);


-- ========================================
-- Insert sample data: Organizations
-- ========================================
INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');



-- ========================================
-- Service Project Table
-- ========================================
CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    date DATE NOT NULL,

    FOREIGN KEY (organization_id)
        REFERENCES organization(organization_id)
);




-- ========================================
-- Insert sample data: Service Projects
-- ========================================
INSERT INTO project (organization_id, title, description, location, date)
VALUES

-- BrightFuture Builders (Organization 1)
(1, 'Community Center Renovation',
 'Help renovate a local community center.',
 'Salt Lake City, UT', '2027-01-15'),

(1, 'Playground Construction',
 'Build a safe playground for children.',
 'Provo, UT', '2027-01-22'),

(1, 'Home Repair Assistance',
 'Assist families with essential home repairs.',
 'Orem, UT', '2027-02-05'),

(1, 'School Painting Project',
 'Paint classrooms at a local elementary school.',
 'Lehi, UT', '2027-02-12'),

(1, 'Community Garden Construction',
 'Build raised garden beds for local residents.',
 'Sandy, UT', '2027-02-19'),

-- GreenHarvest Growers (Organization 2)
(2, 'Urban Garden Planting',
 'Plant vegetables in a community garden.',
 'Salt Lake City, UT', '2027-01-16'),

(2, 'Composting Workshop',
 'Teach residents how to compost organic waste.',
 'Provo, UT', '2027-01-30'),

(2, 'Neighborhood Tree Planting',
 'Plant trees to improve neighborhood green spaces.',
 'Orem, UT', '2027-02-06'),

(2, 'Sustainable Farming Workshop',
 'Introduce sustainable agricultural practices.',
 'Lehi, UT', '2027-02-20'),

(2, 'Community Harvest Day',
 'Harvest fresh produce for local food banks.',
 'Sandy, UT', '2027-03-06'),

-- UnityServe Volunteers (Organization 3)
(3, 'Food Donation Drive',
 'Collect food donations for families in need.',
 'Salt Lake City, UT', '2027-01-23'),

(3, 'Senior Center Visit',
 'Spend time assisting elderly community members.',
 'Provo, UT', '2027-02-13'),

(3, 'Community Park Cleanup',
 'Remove litter and maintain public park areas.',
 'Orem, UT', '2027-02-27'),

(3, 'School Supply Collection',
 'Collect educational supplies for local students.',
 'Lehi, UT', '2027-03-13'),

(3, 'Clothing Donation Event',
 'Organize clothing donations for local shelters.',
 'Sandy, UT', '2027-03-20');