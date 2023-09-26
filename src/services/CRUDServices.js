const connection =require('../config/database')

const getAllUser=async()=>{
    let [results, fields]=await connection.query('select * from Users')
    return results

}
const getUserById=async(userId)=>{
    let [results, fields] = await connection.query('select * from Users where id=?', [userId])
    let user= results && results.length>0? results[0]: {}
    return user
}
const updateUserById=async(email, name, city, userId)=>{
     const [rows, fields] = await connection.query(
        `UPDATE Users set email=?,name=?, city=? WHERE id =?`, [email, name, city, userId])
}
module.exports={getAllUser,getUserById,updateUserById}