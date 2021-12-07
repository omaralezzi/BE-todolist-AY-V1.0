const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// need to be alway below const app = express();
app.set("view engine", "ejs"); // set up ejs for templating and view engine as ejs

app.get("/", (req, res) => {
  let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
  

  res.render("list", { kindOfDay: day});
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
