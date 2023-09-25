const express = require('express')
const {getHomePage,getDataTest,postCreateUser,getCreate} =require('../controllers/homeController')
const router = express.Router()
router.get('/',getHomePage)

router.get('/test', getDataTest )
router.get('/create', getCreate )
router.post('/create-user',postCreateUser)
module.exports = router