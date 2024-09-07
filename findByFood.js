const Person = require("./personModel"); // Import the Person model

// Find one person with 'Burritos' in their favoriteFoods
Person.findOne({ favoriteFoods: "Burritos" }, function (err, data) {
  if (err) return console.error(err); // Handle error if search fails
  console.log("Person with Burritos in favorites:", data); // Log the found document
});
