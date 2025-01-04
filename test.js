const linkedIn = require("./index");

const queryOptions = {
  keyword: "",
  location: "New York",
  keyword: "Software Engineer",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});
