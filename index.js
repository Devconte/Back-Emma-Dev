require('dotenv').config();
const cors = require('cors');

const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./api/router');
const { notFoundHandler } = require('./api/middlewares/errors');

const port = process.env.PORT || '5000';
const app = express();

const options = {
  info: {
    version: '1.0.0',
    title: 'Back EMMA',
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
  baseDir: __dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/app/api-docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v3/api-docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
  // multiple option in case you want more that one instance
  multiple: true,
};

app.use(cors('*'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/app', router);

expressJSDocSwagger(app)(options);
app.use(notFoundHandler);


app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
