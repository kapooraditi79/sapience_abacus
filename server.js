const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Optional: if you have a custom folder for views
// app.set('views', __dirname + '/views');

app.use(express.static('public')); // For serving CSS, JS, images, etc.

app.get('/', (req, res) => {
  res.render('dashboard'); // Looks for views/dashboard.ejs
});

app.get('/dictation', (req, res) => {
    res.render('dictation');
  });
  
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
