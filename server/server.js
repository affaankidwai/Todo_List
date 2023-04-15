const express = require('express');
const mongoose = require('mongoose');

const port = 4000;

mongoose.connect('mongodb+srv://affaankidwai:yGGOna1vy9GS95QG@cluster0.zt8mtda.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
