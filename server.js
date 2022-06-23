//
//                      REQUIRE DEPENDENCIES
//

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

//
//                      INITITALIZE EXPRESS & PORT
//
const app = express()
require("dotenv").config()

//
//                      SET UP DATEBASE
//

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error))

//
//                      MIDDLEWARE
//
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

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
})

// Restaurant Model
const All = mongoose.model("All", restaurantSchema)

//                      ROUTES

// Root Route
app.get("/", (req, res) => {
  res.render("index.ejs")
})

//
//                      Index Route
//

app.get("/all", async (req, res) => {
  try {
    res.json(await All.find({}))
  } catch (error) {
    console.log("error: ", error)
    res.json({ error: "something is wrong check console" })
  }
})

//
//                      Delete Route
//

app.delete("/all/:id", async (req, res) => {
  try {
    // Send all people
    res.json(await All.findByIdAndDelete(req.params.id))
  } catch (error) {
    // Send error
    console.log("error: ", error)
    res.json({ error: "something went wrong - check console" })
  }
})

//
//                      Update Route
//

app.put("/all/:id", async (req, res) => {
  try {
    res.json(
      await All.findByIdAndUpdate(req.params.id, req.body, { new: true })
    )
  } catch (error) {
    console.log("error: ", error)
    res.json({ error: "something went wrong - check the console" })
  }
})

//
//                      Create Route
//

app.post("/all", async (req, res) => {
  try {
    res.json(await All.create(req.body))
  } catch (error) {
    res.json({ error: "something went wrong check console" })
  }
})

// E

// S

// Tell Express to Listen
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Express is listening on: ${PORT}`))
