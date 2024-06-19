const path = require('path')
const express = require('express')
require('dotenv').config({ path: '.env.local' })
require('colors')

const PORT = process.env.PORT || 3500
const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))

app.all('*', (req, res) => {
  res.status(404)

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

app.listen(PORT, () => {
  console.log(`REPAIR NOTES SERVER RUNNING ON PORT: ${PORT}`.green.inverse)
})
