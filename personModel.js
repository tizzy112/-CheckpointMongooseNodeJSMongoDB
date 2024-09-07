const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Person schema with fields: name, age, and favoriteFoods
const personSchema = new Schema({
  name: { type: String, required: true }, // name is a required field
  age: Number, // age is optional
  favoriteFoods: [String], // favoriteFoods is an array of strings
});

// Create the Person model from the schema
const Person = mongoose.model("Person", personSchema);

module.exports = Person; // Export the Person model for use in other files
