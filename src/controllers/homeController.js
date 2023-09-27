const connection = require('../config/database')
const { getAllUser, getUserById, updateUserById,removeUserById } = require('../services/CRUDServices')
const getHomePage = async (req, res) => {
    // let results = await getAllUser();
    // return res.render('home', { listUsers: results })
    return res.render('home')
}
const getDataTest = (req, res) => {
    res.render('sample.ejs')
}
const getCreate = (req, res) => {
    res.render('create.ejs')
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('edit.ejs', { userEdit: user })
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // let {email, name, city}=req.body;
    console.log(email, name, city);
    // connection.query(
    //     `INSERT INTO Users (email,name, city)
    //     VALUES (?, ?, ?)`,
    //     [email,name, city],
    //     function(err, results) {
    //       console.log(results);
    //       res.send('Create user success')

    //     }
    //   );
    // ;
    const [rows, fields] = await connection.query(
        `INSERT INTO Users (email,name, city) VALUES (?, ?, ?)`, [email, name, city])
    // const [rows, fields] = await connection.execute('SELECT * FROM Users');
      res.redirect('/')


}
const postUpdateeUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    const userId = req.params.id;
    console.log(userId, email);
   await updateUserById(email, name, city, userId)
    res.redirect('/')

}
const postDeleteUser=async(req, res)=>{
      const userId = req.params.id;
    let user = await getUserById(userId)
    res.render('delete',{ userEdit: user })

}
const postHandleRemoveUser=async(req, res)=>{
    const userId = req.body.id;
      await removeUserById(userId)
      res.redirect('/')

}
module.exports = {
    getHomePage, getDataTest, postCreateUser, getCreate, getUpdatePage, postUpdateeUser,postDeleteUser,postHandleRemoveUser
}