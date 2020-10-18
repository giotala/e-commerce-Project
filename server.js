const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

// const SERVER_CONFIGS = require('./constants/server');

// const configureRoutes = require('./routes');
 
const cors = require('cors');
const bodyParser = require('body-parser');
 
const CORS_WHITELIST = require('./constants/frontend');
 
const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};
 
const configureServer = app => {
  app.use(cors(corsOptions));
 
  app.use(bodyParser.json());
};
 
module.exports = configureServer;
const app = express();


// configureRoutes(app);
 

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

app.listen(port, () => console.log(`Server listening on port ${port}`));
