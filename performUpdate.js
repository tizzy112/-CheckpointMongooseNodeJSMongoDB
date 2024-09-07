const Person = require("./personModel"); // Import the Person model

const personId = "some_person_id"; // Replace with actual person ID

// Find a person by _id and update their favoriteFoods
Person.findById(personId, function (err, person) {
  if (err) return console.error(err); // Handle error if search fails
  if (person) {
    person.favoriteFoods.push("Hamburger"); // Add 'Hamburger' to favoriteFoods
    person.save(function (err, updatedPerson) {
      if (err) return console.error(err); // Handle error if saving fails
      console.log("Updated person:", updatedPerson); // Log the updated document
    });
  }
});
