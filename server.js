import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { testConnection } from "./src/models/db.js";
import { getAllOrganizations } from "./src/models/organizations.js";
import { getAllProjects } from "./src/models/projects.js";

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * Set EJS as the templating engine
 */
app.set("view engine", "ejs");

/**
 * Tell Express where to find your templates
 */
app.set("views", path.join(__dirname, "src/views"));

/**
 * Configure Express middleware
 */

// Server static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes
 */

app.get("/", (req, res) => {
  const title = "Home";
  res.render("home", { title });
});

app.get("/organizations", async (req, res) => {
  const organizations = await getAllOrganizations();

  const title = "Our partner Organizations";
  res.render("organizations", { title, organizations });
});

app.get("/projects", async (req, res) => {
  const title = "Service Projects";
  const projects = await getAllProjects();
  res.render("projects", { title , projects });
});

app.get("/categories", (req, res) => {
  const title = "Categories";
  res.render("categories", { title });
});

app.listen(PORT, async () => {
  try {
    await testConnection();
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
  } catch (error) {
    console.error("Error connection to the data base:", error);
  }
});
