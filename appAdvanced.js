const express = require('express');
const app = express();

// Udostępnianie folderu "public" jako statycznego
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server działa na http://localhost:3000');
});
