import { getCategoriesByProjectId } from "../models/categories.js";
import { getUpcomingProjects, getProjectDetails } from "../models/projects.js";

const NUMBER_OF_UPCOMING_PROJECTS = 5;

const showProjectsPage = async (req, res) => {
  const title = "Upcoming Service Projects";
  const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);
  res.render("projects", { title, projects });
};

const showProjectDetailsPage = async (req, res) => {
  const projectId = req.params.id;
  const projectDetails = await getProjectDetails(projectId);
  const categoryByProject = await getCategoriesByProjectId(projectId);
  const title = "Project Details";

  res.render("project", { title, projectDetails, categoryByProject });
};

export { showProjectsPage, showProjectDetailsPage };
