const express = require('express')
const {getUserApi,postCreateUserApi,putUpdateUserApi,DeleteUserApi}=require('../controllers/apiController')
const apiRouter = express.Router()
apiRouter.get('/users',getUserApi)
apiRouter.post('/users',postCreateUserApi)
apiRouter.put('/users',putUpdateUserApi)
apiRouter.delete('/users',DeleteUserApi)

module.exports = apiRouter