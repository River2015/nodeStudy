require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routers/userRoutes");
const usersRoutes = require("./routers/usersRoutes");
const groupsRoutes = require("./routers/groupsRoutes");
const userGroupRoutes = require("./routers/userGroupRoutes");
const authUser = require('./routers/authRoutes')
const authRoutes = require("./routers/authRoutes");
const sequelize = require('./models').sequelize;
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const log = require('./middlewares/consoleLogger');
const checkToken = require('./middlewares/authMiddleware');
const cors = require('./middlewares/corsMiddleware');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(log);
app.use(cors);

app.get('/', (req, res) => {
    logger.info('Server Sent Resp')
    res.send("INSEds");
});

app.use('/user',checkToken, userRoutes);
app.use('/users',checkToken,  userRoutes);
app.use('/groups',checkToken, groupsRoutes);
app.use('/userstogroups',checkToken, userGroupRoutes);
app.use('/auth', authUser);

// TODO: endpoint for checking loggers work
app.use('/error', () => {
    throw 'error-found'
})

app.use(errorHandler);
app.all("*", (req, res) => {
  res.status(404).end();
});

process.on('unhandledRejection',(e,origin)=>{
  logger.error('Winston unhandled rejection Logger...', e, origin);
})

process.on('uncaughtException',(e,origin)=>{
  logger.error('Winston Uncaught Exception Logger...', e, origin);
})

sequelize.sync().then(function() {
  app.listen(PORT,() => {
    console.log("Server listening on port number ", PORT);
  });
});
