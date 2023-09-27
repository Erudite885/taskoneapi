const express = require('express');
const prism = require('@stoplight/prism-http-server');
const cors = require('cors'); // Import the cors package

const app = express();

// Configure CORS to allow requests from your React frontend's domain
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your React frontend's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions)); // Use CORS middleware

// Set up your PRISM mock server routes and start the server
prism.create().then(server => {
  app.use('/', server.requestListener);
  app.listen(4010, () => {
    console.log('PRISM Mock API Server is running on port 4010');
  });
});
