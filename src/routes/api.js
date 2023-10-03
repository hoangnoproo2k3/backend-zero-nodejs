const express = require('express')
const { getUserApi, postCreateUserApi, putUpdateUserApi, DeleteUserApi, postUploadSingleFileApi, postUploadMultipleFilesAPI } = require('../controllers/apiController')
const apiRouter = express.Router()
apiRouter.get('/users', getUserApi)
apiRouter.post('/users', postCreateUserApi)
apiRouter.put('/users', putUpdateUserApi)
apiRouter.delete('/users', DeleteUserApi)
apiRouter.post('/file', postUploadSingleFileApi)
apiRouter.post('/files', postUploadMultipleFilesAPI)

module.exports = apiRouter