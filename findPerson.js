const Person = require("./personModel"); // Import the Person model

// Find all people with the name 'Alice'
Person.find({ name: "Alice" }, function (err, data) {
  if (err) return console.error(err); // Handle error if search fails
  console.log("People with name Alice:", data); // Log the found documents
});
