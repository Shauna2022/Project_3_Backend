// // Dependencies
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Restaurant Schema
// const restaurantSchema = new Schema({
//   name: { type: String, required: true }, // Name of restaurant/foodtruck
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   website: { type: String, required: true }, //
//   image: { type: String }, // Logo or image of restaurant / favorite dish
//   style: { type: Array, required: true }, // Dine-in, take-out, delivery, food truck, etc.
//   cuisine: { type: Array, required: true }, // Mexican, Japanese, Moroccan, etc.
//   user: { type: String, required: true }, // Which user created the entry
//   userRating: { type: Number, required: true }, // User's rating score
//   comments: { type: String, required: true }, // User's comments/reviews
//   googleRating: { type: Number },
//   yelpRating: { type: Number },
// });

// // Restaurant Model
// const Restaurant = mongoose.model("Restaurant", restaurantSchema);

// // // Export Restaurant Model
// module.exports = Restaurant;
