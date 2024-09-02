const blogSchema = require("../models/blogSchema");

async function blogController(req, res) {
  try {
    const { title, description, author } = req.body;
    const blogData = new blogSchema({
      title,
      description,
      author,
    });
    await blogData.save();

    res.status(201).json({ success: "Blog created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}
async function allBlogController(req, res) {
  let blogs = await blogSchema.find({});
  return res.json({ count: blogs.length, data: blogs });
}

async function getSingleBlogController(req, res) {
  try {
    const id = req.params.id;
    const data = await blogSchema.findById(id);
    if (!data) {
      return res.status(404).send({ error: "Blog not found" });
    }
    res.send(data);
  } catch (error) {
    console.error("Error deleting class:", error);
    res.status(500).send({ error: "Internal server error" });
  }
}

async function updateBlogController(req, res) {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const blogData = await blogSchema.findByIdAndUpdate(id, updateData, {
      returnOriginal: false,
    });

    if (!blogData) {
      return res.status(404).send({ error: "Blog not found" });
    }
    res.send(blogData);
  } catch (error) {
    console.error("Error deleting class:", error);
    res.status(500).send({ error: "Internal server error" });
  }
}

async function deleteBlogController(req, res) {
  try {
    const id = req.params.id;
    const data = await blogSchema.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send({ error: "Blog not found" });
    }
    res.send({ success: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send({ error: "Internal server error" });
  }
}

module.exports = {
  blogController,
  allBlogController,
  getSingleBlogController,
  updateBlogController,
  deleteBlogController,
};
