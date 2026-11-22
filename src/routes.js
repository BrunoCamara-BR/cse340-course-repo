import express from "express";

import { showHomePage } from "./controllers/index.js";
import { showOrganizationsPage } from "./controllers/organizations.js";
import { showProjectsPage } from "./controllers/projects.js";
import { showCategoriesPage } from "./controllers/categories.js";
import { testErroPage } from "./controllers/erros.js";
import { showOrganizationDetailsPage } from "./controllers/organizations.js"

const router = express.Router();

router.get("/", showHomePage);
router.get("/organizations", showOrganizationsPage);
router.get("/projects", showProjectsPage);
router.get("/categories", showCategoriesPage);

// Errors handling routers
router.get("/test-error", testErroPage);

// Route for organization details page
router.get("/organization/:id", showOrganizationDetailsPage)

export default router;