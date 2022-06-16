//
//                      REQUIRE DEPENDENCIES
//

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

//
//                      INITITALIZE EXPRESS & PORT
//
const app = express();

require("dotenv").config();

//
//                      SET UP DATEBASE
//

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

//
//                      MIDDLEWARE
//
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//
//                      MODELS
//
// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of restaurant/foodtruck
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  website: { type: String, required: true }, //
  image: { type: String }, // Logo or image of restaurant / favorite dish
  style: { type: Array, required: true }, // Dine-in, take-out, delivery, food truck, etc.
  cuisine: { type: Array, required: true }, // Mexican, Japanese, Moroccan, etc.
  user: { type: String, required: true }, // Which user created the entry
  userRating: { type: Number, required: true }, // User's rating score
  comments: { type: String, required: true }, // User's comments/reviews
  googleRating: { type: Number },
  yelpRating: { type: Number },
});

// Restaurant Model
const Detroit = mongoose.model("Detroit", restaurantSchema);
const Houston = mongoose.model("Houston", restaurantSchema);
const Austin = mongoose.model("Austin", restaurantSchema);
const Raleigh = mongoose.model("Raleigh", restaurantSchema);

//                      ROUTES

// Test Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
//                      Index Routes
//

// Detroit
app.get("/detroit", async (req, res) => {
  try {
    res.json(await Detroit.find({}));
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something is wrong check console" });
  }
});

// Houston
app.get("/houston", async (req, res) => {
  try {
    res.json(await Houston.find({}));
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something is wrong check console" });
  }
});

// Austin
app.get("/austin", async (req, res) => {
  try {
    res.json(await Austin.find({}));
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something is wrong check console" });
  }
});

// Raleigh
app.get("/raleigh", async (req, res) => {
  try {
    res.json(await Raleigh.find({}));
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something is wrong check console" });
  }
});

//
//                      Delete Routes
//

// Detroit
app.delete("/detroit/:id", async (req, res) => {
  try {
    // Send all people
    res.json(await Detroit.findByIdAndDelete(req.params.id));
  } catch (error) {
    // Send error
    console.log("error: ", error);
    res.json({ error: "something went wrong - check console" });
  }
});

// Houston
app.delete("/houston/:id", async (req, res) => {
  try {
    // Send all people
    res.json(await Houston.findByIdAndDelete(req.params.id));
  } catch (error) {
    // Send error
    console.log("error: ", error);
    res.json({ error: "something went wrong - check console" });
  }
});

// Austin
app.delete("/austin/:id", async (req, res) => {
  try {
    // Send all people
    res.json(await Austin.findByIdAndDelete(req.params.id));
  } catch (error) {
    // Send error
    console.log("error: ", error);
    res.json({ error: "something went wrong - check console" });
  }
});

// Raleigh
app.delete("/raleigh/:id", async (req, res) => {
  try {
    // Send all people
    res.json(await Raleigh.findByIdAndDelete(req.params.id));
  } catch (error) {
    // Send error
    console.log("error: ", error);
    res.json({ error: "something went wrong - check console" });
  }
});

//
//                      Update Routes
//

// Detroit
app.put("/detroit/:id", async (req, res) => {
  try {
    res.json(
      await Detroit.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something went wrong - check the console" });
  }
});

// Houston
app.put("/houston/:id", async (req, res) => {
  try {
    res.json(
      await Houston.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something went wrong - check the console" });
  }
});

// Austin
app.put("/austin/:id", async (req, res) => {
  try {
    res.json(
      await Austin.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something went wrong - check the console" });
  }
});

// Raleigh
app.put("/raleigh/:id", async (req, res) => {
  try {
    res.json(
      await Raleigh.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log("error: ", error);
    res.json({ error: "something went wrong - check the console" });
  }
});

//
// Create Routes
//

// Detroit
app.post("/detroit", async (req, res) => {
  try {
    res.json(await Detroit.create(req.body));
  } catch (error) {
    res.json({ error: "something went wrong check console" });
  }
});

// Houston
app.post("/houston", async (req, res) => {
  try {
    res.json(await Houston.create(req.body));
  } catch (error) {
    res.json({ error: "something went wrong check console" });
  }
});

// Austin
app.post("/austin", async (req, res) => {
  try {
    res.json(await Austin.create(req.body));
  } catch (error) {
    res.json({ error: "something went wrong check console" });
  }
});
app.post("/raleigh", async (req, res) => {
  try {
    res.json(await Raleigh.create(req.body));
  } catch (error) {
    res.json({ error: "something went wrong check console" });
  }
});

// E

// S

// Tell Express to Listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Express is listening on: ${PORT}`));
