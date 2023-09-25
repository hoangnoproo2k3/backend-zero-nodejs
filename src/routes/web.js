const express = require('express')
const {getHomePage,getDataTest,postCreateUser} =require('../controllers/homeController')
const router = express.Router()
router.get('/',getHomePage)

router.get('/test', getDataTest )
router.post('/create-user',postCreateUser)
module.exports = router