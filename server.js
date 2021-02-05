const express = require("express");
const bodyParser = require("body-parser");



const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs')
// simple route
app.get("/", (req, res) => {
  //res.render('../views/customer.ejs')
   res.json({ message: "Welcome to bezkoder application." });
});  

app.get("/customers", (req, res) => {
  res.json({ message: "sddsd" });
});  

require("./routes/customer.routes.js")(app);



// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});