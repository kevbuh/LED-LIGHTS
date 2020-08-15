// const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();

// // Passport Config
// require("./config/passport")(passport);

// // DB Config
// const db = require("./config/keys").MongoURI;

// // Connect to MongoDB
// //Connect to Mongo
// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => console.log(err));

// // EJS
// app.use(expressLayouts);
// app.set("view engine", "ejs");

// // CORS
// app.use(cors());

// // Express body parser
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(express.static("."));
// app.use(express.json());

// // Express session
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect flash
// app.use(flash());

// // Global variables
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });

// // Routes
// app.use("/", require("./routes/index.js"));
// app.use("/users", require("./routes/users.js"));
// app.use("/api", require("./routes/api"));
// app.use("/stripe", require("./routes/stripeAPI"));

// const PORT = process.env.PORT || 9009;

// app.listen(PORT, console.log(`Server started on port ${PORT}`));
