import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * Set JES as the templating engine
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

app.get("/organizations", (req, res) => {
  const title = "Our partner Organizations";
  res.render("organizations", { title });
});

app.get("/projects", (req, res) => {
  const title = "Service Projects";
  res.render("projects", { title });
});

app.get("/categories", (req, res) => {
  const title = "Categories";
  res.render("categories", { title });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
  console.log("real-time update");
});
