const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoute = require("./route/blogsRoute");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "some html");

//connect with database;
const dv_uri =
  "mongodb+srv://ranjan:ranjan@cluster0.huv8w.mongodb.net/ranjan?retryWrites=true&w=majority";

mongoose
  .connect(dv_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000, () => {
      console.log("listen in port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about page" });
});

app.use("/blogs", blogRoute);

app.use((req, res) => {
  res.render("404", { title: "not found" });
});
