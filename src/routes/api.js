const express = require('express')
const {getUserApi,postCreateUserApi}=require('../controllers/apiController')
const apiRouter = express.Router()
apiRouter.get('/users',getUserApi)
apiRouter.post('/users',postCreateUserApi)

module.exports = apiRouter