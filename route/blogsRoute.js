const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogsController");

router.get("/create", blogController.blogCreate);

// blogs route
router.get("/", blogController.blogIndex);

// post
router.post("/", blogController.blogCreatePost);

// for id
router.get("/:id", blogController.blogCreateGet);

//for delete
router.delete("/:id", blogController.blogDelete);

module.exports = router;
