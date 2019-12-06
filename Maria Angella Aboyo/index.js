/* require is a keyword used to use a package and below are the packages */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs"); // requring the file system
const mongodb = require("mongodb");
const session = require("express-session");



const app = express(); // now we have our express app


/* mongoose db connection */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Assessment", () => {
  console.log("connected successfully to databse");
});



app.use(express.static("./public"));

/* var storage = multer.diskStorage({
  destination: function(req, photo, cb) {
    cb(null, "public/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file, +"-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
}); */



// middleware
app.set("view engine", "pug"); //setting the view engine as pug
app.set("views", path.join(__dirname, "views")); //there's a folder called views and this is how to get it
app.use(bodyParser.urlencoded({ extended: true })); //for geting the posted data from the form in the console/body and the output is json
// app.use(bodyParser.json());



//express-session for tracking user's activity    or tracking logins
app.use(session({
secret:"thesecret",
resave: true,
saveUninitialized: false

}));



/* app.get('/upload',(req,res)=>{
  res.render('uploads')
})


app.post("/upload", upload.single('imageupload'), (req, res) => {
  res.send("File upload succesful");
});
 */








//import routes

const landingpageRoute = require("./routes/landingpageroute");
app.use("/", landingpageRoute);

const staffregistrationRoute = require("./routes/staffregistrationroute");
app.use("/staffregistration", staffregistrationRoute);

const staffloginRoute = require("./routes/staffloginroute");
app.use("/stafflogin", staffloginRoute);

const staffinputRoute = require("./routes/staffinputroute");
app.use("/staffinput", staffinputRoute);






const stafflogoutRoute = require("./routes/stafflogoutroute");
app.use("/stafflogout", stafflogoutRoute);







app.listen(4300, function() {
  console.log("Express listening  on 4300");
});
