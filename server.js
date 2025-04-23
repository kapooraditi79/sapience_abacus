const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Configure view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  if (email && password) {
    res.redirect('/dashboard');
  } else {
    res.send('Invalid login. Please try again.');
  }
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// Dictation Practice Route (NEW)
app.get('/dictation-practice', (req, res) => {
  res.render('dictation-practice');
});

app.get('/dictation', (req, res) => {
  res.render('dictation');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send("Sorry, that page doesn't exist!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});