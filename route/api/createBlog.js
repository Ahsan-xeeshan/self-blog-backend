const express = require("express");
const router = express.Router();
const {
  blogController,
  allBlogController,
  getSingleBlogController,
  updateBlogController,
  deleteBlogController,
} = require("../../controllers/blogController");

router.get("/all-blog", allBlogController);
router.get("/single-blog/:id", getSingleBlogController);
router.post("/create-blog", blogController);
router.post("/update-blog/:id", updateBlogController);
router.post("/delete-blog/:id", deleteBlogController);

module.exports = router;
