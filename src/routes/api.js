const express = require('express')
const {getUserApi}=require('../controllers/apiController')
const apiRouter = express.Router()
apiRouter.get('/users',getUserApi)

module.exports = apiRouter