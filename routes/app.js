const express = require("express");
const router = express.Router();
const students = require("../model/student");

router.get("/", (req, res) => {
  res.render("work");
});
router.get("/edit/:id", async (req, res) => {
  const EditId = await students.findById(req.params.id);
  res.render("edit", {
    EditId,
  });
});
router.get("/update/:id", async (req, res) => {
  await students.findByIdAndUpdate(req.params.id, req.query);
  res.redirect("/all");
});
router.post("/add", async (req, res) => {
  const student = new students(req.body);
  await student.save();
  res.redirect("/all");
});

router.get("/all", async (req, res) => {
  res.render("listen", {
    allData: await students.find(),
  });
});

router.get("/delete/:id", async (req, res) => {
  await students.findByIdAndDelete(req.params.id);
  res.redirect("/all");
});
module.exports = router;
