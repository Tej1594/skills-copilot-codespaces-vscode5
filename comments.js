// Create web server
import express from 'express';
var app = express();
import { json, urlencoded } from 'body-parser';
import { readFileSync } from 'fs';

app.use(json());
app.use(urlencoded({ extended: true }));

// Load comments from file
var comments = JSON.parse(readFileSync('comments.json', 'utf8'));

// Get all comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Add a new comment
app.post('/comments', function(req, res) {
  var comment = {
    id: Date.now(),
  }
})
