const express = require("express");
const router = express.Router();

const blogRouter = require("./createBlog");

router.use("/blog", blogRouter);

module.exports = router;
