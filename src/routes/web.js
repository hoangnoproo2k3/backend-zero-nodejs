const express = require('express')
const {getHomePage,getDataTest} =require('../controllers/homeController')
const router = express.Router()
router.get('/',getHomePage)

router.get('/test', getDataTest )
module.exports = router