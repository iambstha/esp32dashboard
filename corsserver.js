const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your Next.js application's origin
const corsOptions = {
  origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));

// Your routes and other server code here

app.listen(3000, () => {
  console.log('Server is running on port 8080');
});
