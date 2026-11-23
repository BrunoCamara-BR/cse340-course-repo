import { getAllCategories, getCategoryById } from "../models/categories.js";
import { getAllProjectsByCategoryId } from "../models/projects.js";

const showCategoriesPage = async (req, res) => {
  const title = "Categories";
  const categories = await getAllCategories();
  res.render("categories", { title, categories });
};

const showCategoryPage = async (req, res) => {
  const title = "Category";
  const categoryId = req.params.id;
  const categoryDetails = await getCategoryById(categoryId);
  const projectsByCategory = await getAllProjectsByCategoryId(categoryId);

  res.render("category", { title, categoryDetails, projectsByCategory });
};

export { showCategoriesPage, showCategoryPage };
