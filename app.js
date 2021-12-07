const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// need to be alway below const app = express();
app.set("view engine", "ejs"); // set up ejs for templating and view engine as ejs

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";
  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend 😃";
  } else {
    day = "Weekday 😉";
  }
  switch (currentDay) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
  }
  console.log(dayOfWeek);

  res.render("list", { kindOfDay: day, dayOfWeekName: dayOfWeek });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
