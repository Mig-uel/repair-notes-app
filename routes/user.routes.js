const router = require('express').Router()

// controllers
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller')

router
  .route('/')
  .get(getAllUsers)
  .post(createUser)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router
