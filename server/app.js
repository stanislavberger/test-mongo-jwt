
const express = require('express')
const connectDB = require('./services/mongo-connection')
const auth = require('./routes/auth');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

connectDB();

// Middleware
app.use(bodyParser.json());

// Маршруты
app.use('/api/auth', auth);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('This a page of new User!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})