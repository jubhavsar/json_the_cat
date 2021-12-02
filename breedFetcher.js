const request = require("request");
const args = process.argv.slice(2);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  (error, response, body) => {
    if (error) {
      return console.log("error:", error); // Print the error if one occurred
    }
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`Breed is not found`);
    }
  }
);
