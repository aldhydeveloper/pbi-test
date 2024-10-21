const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular dist directory
app.use(express.static(path.join(__dirname, 'dist/pbi-embeded-collexe')));

// Only serve the index.html file for non-static routes
app.get('*', (req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.resolve(__dirname, 'dist/pbi-embeded-collexe/browser', 'index.html'));
  }
});

// Start the server on Heroku's environment port or 8080
app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running...');
});
