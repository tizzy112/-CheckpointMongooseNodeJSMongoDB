const Person = require("./personModel"); // Import the Person model

// Array of person objects to be created
const arrayOfPeople = [
  { name: "Alice", age: 25, favoriteFoods: ["Sushi", "Salad"] },
  { name: "Bob", age: 32, favoriteFoods: ["Burger", "Fries"] },
  { name: "Charlie", age: 28, favoriteFoods: ["Tacos", "Burritos"] },
];

// Create multiple Person documents
Person.create(arrayOfPeople, function (err, data) {
  if (err) return console.error(err); // Handle error if creation fails
  console.log("People created:", data); // Log the created documents
});
