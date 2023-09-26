const express = require('express')
const {getHomePage,getDataTest,postCreateUser,getCreate,getUpdatePage,postUpdateeUser,postDeleteUser,postHandleRemoveUser} =require('../controllers/homeController')
const router = express.Router()
router.get('/',getHomePage)

router.get('/test', getDataTest )
router.get('/create', getCreate )
router.get('/update/:id', getUpdatePage )
router.post('/create-user',postCreateUser)
router.post('/update-user/:id',postUpdateeUser)
router.post('/delete-user/:id',postDeleteUser)
router.post('/delete-user',postHandleRemoveUser)
module.exports = router