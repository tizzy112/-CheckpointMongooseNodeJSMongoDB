const Person = require("./personModel"); // Import the Person model

// Find people who like burritos, sort by name, limit results to 2, and hide age
Person.find({ favoriteFoods: "Burritos" })
  .sort({ name: 1 }) // Sort by name in ascending order
  .limit(2) // Limit results to 2 documents
  .select("-age") // Exclude the age field from the results
  .exec(function (err, data) {
    if (err) return console.error(err); // Handle error if query fails
    console.log("People who like burritos:", data); // Log the query results
  });
