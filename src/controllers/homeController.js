const connection = require('../config/database')
const { getAllUser, getUserById, updateUserById, removeUserById } = require('../services/CRUDServices')
const User = require('../models/user')
const getHomePage = async (req, res) => {
    // let results = await getAllUser();
    let results =   await User.find({});;
    return res.render('home', { listUsers: results })
}
const getDataTest = (req, res) => {
    res.render('sample.ejs')
}
const getCreate = (req, res) => {
    res.render('create.ejs')
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // let user = await getUserById(userId)
    let user=await User.findById(userId).exec();
    res.render('edit.ejs', { userEdit: user })
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    await User.create({
        email, name, city
    })
    res.redirect('/')
}
const postUpdateeUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    const userId = req.params.id;
    // await updateUserById(email, name, city, userId)
    await User.updateOne({_id:userId},{ email: email ,name: name ,city: city});
    res.redirect('/')

}
const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user=await User.findById(userId).exec();
    // let user = await getUserById(userId)
    res.render('delete', { userEdit: user })

}
const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.id;
    // await removeUserById(userId)
    await User.deleteOne({ _id: userId });
    res.redirect('/')

}
module.exports = {
    getHomePage, getDataTest, postCreateUser, getCreate, getUpdatePage, postUpdateeUser, postDeleteUser, postHandleRemoveUser
}