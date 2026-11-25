import express from "express";

import { showHomePage } from "./controllers/index.js";
import { showOrganizationsPage, processNewOrganizationForm } from "./controllers/organizations.js";
import { showProjectsPage, showProjectDetailsPage } from "./controllers/projects.js";
import { showCategoriesPage, showCategoryPage } from "./controllers/categories.js";
import { testErroPage } from "./controllers/erros.js";
import { showOrganizationDetailsPage } from "./controllers/organizations.js";
import { showNewOrganizationFrom } from "./controllers/organizations.js";

const router = express.Router();

router.get("/", showHomePage);
router.get("/organizations", showOrganizationsPage);
router.get("/projects", showProjectsPage);
router.get("/categories", showCategoriesPage);

// Errors handling routers
router.get("/test-error", testErroPage);

// Route for organization details page
router.get("/organization/:id", showOrganizationDetailsPage);

// Router for project details page
router.get("/project/:id", showProjectDetailsPage);

// Router for category details page
router.get("/category/:id", showCategoryPage);

// Router for new organization page
router.get("/new-organization", showNewOrganizationFrom);

// Route to handle new organization form submission
router.post("/new-organization", processNewOrganizationForm);

export default router;
