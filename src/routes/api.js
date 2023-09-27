const express = require('express')
const {getUserApi,postCreateUserApi,putUpdateUserApi}=require('../controllers/apiController')
const apiRouter = express.Router()
apiRouter.get('/users',getUserApi)
apiRouter.post('/users',postCreateUserApi)
apiRouter.put('/users',putUpdateUserApi)

module.exports = apiRouter