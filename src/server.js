const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

mongoose
  .connect('mongodb://localhost:27017/reviews', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/', routes)

    app.listen(3333, () => {
      console.log('🚀 Server is running!')
    })
  })
