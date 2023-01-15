const express = require("express");
const bodyParser = require("body-parser");

//const db = require('./config/database')

// const suggestRoutes = require("./routers/suggestionRoutes");
const userRoutes = require("./routers/usersDB");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("INSEds")
});

// app.use('/users', suggestRoutes);
//
 app.use('/user', userRoutes);

// app.all("*", (req, res) => {
//   return res.status(404).end();
// });

app.listen(PORT,() => {
  console.log("Server listening on port number ", PORT);
});
