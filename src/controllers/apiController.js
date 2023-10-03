const User = require('../models/user')
const { uploadSingleFile, uploadMultipleFiles } = require('../services/fileService')
const getUserApi = async (req, res) => {
    let results = await User.find({});;
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const postCreateUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let user = await User.create({
        email, name, city
    })
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const putUpdateUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    const userId = req.body.id;
    // await updateUserById(email, name, city, userId)
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}
const DeleteUserApi = async (req, res) => {
    const userId = req.body.id;
    let results = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const postUploadSingleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let results = await uploadSingleFile(req.files.image)
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const postUploadMultipleFilesAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await postUploadSingleFileApi(req, res);
    }
}
module.exports = { getUserApi, postCreateUserApi, putUpdateUserApi, DeleteUserApi, postUploadSingleFileApi, postUploadMultipleFilesAPI }