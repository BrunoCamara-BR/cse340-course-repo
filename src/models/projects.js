import db from "./db.js";

const getAllProjects = async () => {
  const query = `
    SELECT
        project.project_id,
        project.organization_id,
        project.title,
        project.description,
        project.location,
        project.date,
        organization.name
    FROM project
    INNER JOIN organization
        ON project.organization_id = organization.organization_id;
    `;

  const result = await db.query(query);

  return result.rows;
};

export { getAllProjects };
