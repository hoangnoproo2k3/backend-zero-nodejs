const User = require('../models/user')
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
module.exports = { getUserApi, postCreateUserApi, putUpdateUserApi, DeleteUserApi }