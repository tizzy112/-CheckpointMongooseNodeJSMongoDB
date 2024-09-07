const Person = require("./personModel"); // Import the Person model

const personId = "some_person_id"; // Replace with actual person ID

// Find a person by their _id
Person.findById(personId, function (err, data) {
  if (err) return console.error(err); // Handle error if search fails
  console.log("Person found by ID:", data); // Log the found document
});
