const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routers/userRoutes");
const usersRoutes = require("./routers/usersRoutes");
const groupsRoutes = require("./routers/groupsRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send("INSEds")
});


app.use('/user', userRoutes);
app.use('/users', userRoutes);
app.use('/groups', groupsRoutes);

app.all("*", (req, res) => {
  return res.status(404).end();
});

app.listen(PORT,() => {
  console.log("Server listening on port number ", PORT);
});
