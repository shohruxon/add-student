const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const appRouter = require("./routes/app");

app.use("/", appRouter);

const port = 3000 || process.env.PORT;

mongoose.connect(
  "mongodb+srv://shohrux:shax3166@cluster0.qktjc0r.mongodb.net/students",
  () => {
    console.log("mongoDB connected");
  }
);

app.listen(port, () => {
  console.log(`server on working ${port}`);
});
