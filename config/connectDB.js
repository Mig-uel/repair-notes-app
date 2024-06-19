const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI)
    console.log(`MONGODB: ${db.connection.name}`.green.inverse)
  } catch (error) {
    console.log(err)
  }
}

module.exports = connectDB
