// db/db.js
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://lovetocode108:<password>@cluster0.lfwk6rq.mongodb.net/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection; // Assuming you want to export the connection object

// index.js
// const mongoose = require('./db/db'); // Import the connection logic

// Use the imported connection object or functions to interact with MongoDB
