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
const stripe = require("stripe")(
  "sk_test_51H4vK0AOX0Rrng5PQGsmHj5lINOIPng7sPtu8AGsiYVAHQ6s93aEvevP1hZgb2e2C70FpeGU0m2vbBH28oPa299V00I1WtAUCH"
);
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

// ---------------------------Start of Stripe---------------------
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
app.post("/pay-session", async (req, res) => {
  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "https://example.com/cancel",
  });
});

app.get("/pay", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(
    "cs_test_ZVKMdNWuK2IQqLGUOAjwmPa1DLUDAkhnC0XRaqZcqXMgvsj55O2yikgX"
  );
  res.json({ session_id: session.id });
});

// -------------------------End of Stripe---------------------
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
