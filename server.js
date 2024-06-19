const express = require('express')
require('dotenv').config({ path: '.env.local' })
require('colors')

const PORT = process.env.PORT || 3500
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`REPAIR NOTES SERVER RUNNING ON PORT: ${PORT}`.green.inverse)
})
