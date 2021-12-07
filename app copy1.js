const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// need to be alway below const app = express();
app.get("view engine", "ejs"); // set up ejs for templating and view engine as ejs

// app.get("/", (req, res) => {
//   // res.send('Hello World!');

//   let today = new Date();
//   let currentDay = today.getDay();
//   if (currentDay === 6 || currentDay === 0) {
// //     res.send("Yaaaa ...Today is weekend!");
// //   } else {
// //     res.send("Nooo Way..Today is weekday!");
// //   }
//     res.write(<h1>"Yaaaa ...Today is weekend!"</h1>);
//   } else {
//     res.write(<h1>"Nooo Way..Today is weekday!"</h1>);
//     res.write(<p>"well I have to work!"</p>);
//     res.send();
//   }
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
