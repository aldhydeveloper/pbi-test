const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular dist directory
app.use(express.static(path.join(__dirname, 'dist/pbi-embeded-collexe')));

// Ensure requests for JavaScript, CSS, images, etc. are not caught by the wildcard route
app.get('*.*', express.static(path.join(__dirname, 'dist/pbi-embeded-collexe')));

// Catch all other routes and return the index.html for Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/pbi-embeded-collexe/browser', 'index.html'));
});

// Start the server
app.listen(process.env.PORT || 8080, () => {
  console.log('Server running...');
});