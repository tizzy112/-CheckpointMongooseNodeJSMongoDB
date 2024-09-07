const Person = require("./personModel"); // Import the Person model

// Find a person by name and update their age to 20
Person.findOneAndUpdate(
  { name: "John Doe" },
  { age: 20 },
  { new: true }, // Return the updated document
  function (err, updatedPerson) {
    if (err) return console.error(err); // Handle error if update fails
    console.log("Updated person:", updatedPerson); // Log the updated document
  }
);
