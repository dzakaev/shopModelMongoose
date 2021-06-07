const { Router } = require('express');
const controllers = require('../controllers/users');
const router = Router()

router.post('/users', controllers.userPost)
router.delete('/users/:id', controllers.userDelete)

module.exports = router