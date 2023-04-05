const express = require("express");
// const helper = require("./backend/helper");
// const pokemon = require("./backend/pokemon");
// const users = require("./backend/user");
const app = express();
const mongoose = require("mongoose");

const mongoDBEndpoint =
  "mongodb+srv://yuxuanlin:banana1234@cs5610.v64437n.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDBEndpoint, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB:"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/pokemon/", pokemon);
// app.use("/api/users/", users);

//"http://localhost:8000" + "/"
app.get("/", function (request, response) {
  // response.send('Hello web dev, again!!!');
  // response.send(helper.returnWords());
  response.send("I am preventing the next GET method from firign");
});

app.get("/", function (request, response) {
  // response.send('Hello web dev, again!!!');
  // response.send(helper.returnWords());
  response.send("This is the response from the GET method");
});

app.post("/", function (request, response) {
  response.send("This is a response from the POST methodd");
});

app.listen(8000, function () {
  console.log("Starting server now...");
});
