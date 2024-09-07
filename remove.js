const Person = require("./personModel"); // Import the Person model

// Delete all people named 'Mary'
Person.remove({ name: "Mary" }, function (err, result) {
  if (err) return console.error(err); // Handle error if deletion fails
  console.log("Remove result:", result); // Log the result of the remove operation
});
