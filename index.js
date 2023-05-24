require('dotenv').config();
const cors = require('cors');

const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./api/router');
const { notFoundHandler } = require('./api/middlewares/errors');

const port = process.env.PORT || '5000';
const options = {
  info: {
    version: '1.0.0',
    title: 'Api Blog',
    license: {
      name: 'MIT',
    },
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  swaggerUIPath: '/app/api-docs',
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: 'api/**/*.js',
};
const app = express();

app.use(cors('*'));

app.use(express.json());
app.use('/app', router);

app.use(notFoundHandler);
app.use(express.urlencoded({ extended: true }));
expressJSDocSwagger(app)(options);
app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
