const Person = require("./personModel"); // Import the Person model

// Create a new Person document
const person = new Person({
  name: "John Doe",
  age: 30,
  favoriteFoods: ["Pizza", "Pasta"],
});

// Save the document to the database
person.save(function (err, data) {
  if (err) return console.error(err); // Handle error if saving fails
  console.log("Person saved:", data); // Log the saved document
});
