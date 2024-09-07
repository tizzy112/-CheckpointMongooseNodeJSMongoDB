const Person = require("./personModel"); // Import the Person model

const personId = "some_person_id"; // Replace with actual person ID

// Delete a person by their _id
Person.findByIdAndRemove(personId, function (err, removedPerson) {
  if (err) return console.error(err); // Handle error if deletion fails
  console.log("Removed person:", removedPerson); // Log the removed document
});
