const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./Schemas/User");
// const flash = require("connect-flash");
const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");

const app = express();

require("./config/passport")(passport);

const db = require("./config/keys").MongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//-----------Middleware--------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);

// Routes
// app.use("/", require("./routes/index.js"));
// app.use("/users", require("./routes/users.js"));
// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  console.log("success, user sent");
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/register");
});
// app.post("/pay", async (req, res) => {
//   const { email } = req.body;

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 5000,
//     currency: "usd",
//     metadata: { integration_check: "accept_a_payment" },
//     recepient_email: email,
//   });

//   res.json({ client_secret: paymentIntent["client_secret"] });
// });
//----------------------------------------- END OF ROUTES---------------------------------------------------

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
