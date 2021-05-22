const Blogs = require("../models/blogs");

const blogCreate = (req, res) => {
  res.render("form", { title: "Blog | create post" });
};

const blogIndex = (req, res) => {
  Blogs.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("home", { title: "Blog | blogs_post", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blogCreatePost = (req, res) => {
  const blog = new Blogs(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
      console.log("created successfully");
    })
    .catch((err) => console.log(err));
};

const blogCreateGet = (req, res) => {
  const id = req.params.id;
  Blogs.findById(id)
    .then((result) => {
      res.render("single", { title: "Blog | single_blog", blog: result });
    })
    .catch((err) => res.status(404).render("404", { title: "not found" }));
};

const blogDelete = (req, res) => {
  const id = req.params.id;
  Blogs.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
};

module.exports = {
  blogCreate,
  blogIndex,
  blogCreatePost,
  blogCreateGet,
  blogDelete,
};
