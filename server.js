const path = require('path')
const express = require('express')
require('dotenv').config({ path: '.env.local' })
require('colors')

const PORT = process.env.PORT || 3500
const app = express()

app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', require('./routes/root'))

app.listen(PORT, () => {
  console.log(`REPAIR NOTES SERVER RUNNING ON PORT: ${PORT}`.green.inverse)
})
