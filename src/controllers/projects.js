import { getAllProjects } from "../models/projects.js";

const showProjectsPage = async (req, res) => {
  const title = "Service Projects";
  const projects = await getAllProjects();
  res.render("projects", { title, projects });
};

export { showProjectsPage };
