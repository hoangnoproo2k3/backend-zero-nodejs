const connection =require('../config/database')
const {getAllUser} =require('../services/CRUDServices')
const getHomePage = async(req, res) => {
    let results= await getAllUser();
    return res.render('home', {listUsers: results})
}
const getDataTest = (req, res) => {
    res.render('sample.ejs')
}
const getCreate=(req, res)=>{
    res.render('create.ejs')
}
const postCreateUser = async(req, res) => {
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
        `INSERT INTO Users (email,name, city) VALUES (?, ?, ?)`, [email,name, city])
    // const [rows, fields] = await connection.execute('SELECT * FROM Users');
    console.log(rows);
          res.send('Create user success')

}
module.exports = {
    getHomePage, getDataTest, postCreateUser,getCreate
}