const express = require('express')
const {getHomePage,getDataTest,postCreateUser,getCreate,getUpdatePage,postUpdateeUser} =require('../controllers/homeController')
const router = express.Router()
router.get('/',getHomePage)

router.get('/test', getDataTest )
router.get('/create', getCreate )
router.get('/update/:id', getUpdatePage )
router.post('/create-user',postCreateUser)
router.post('/update-user/:id',postUpdateeUser)
module.exports = router