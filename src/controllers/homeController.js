const getHomePage=(req, res)=>{
   return res.render('home')
}
const getDataTest=(req, res)=>{
    res.render('sample.ejs')
}
const postCreateUser= (req,res)=>{
    console.log(req.body);
    res.send('hih sdasd')
}
module.exports={
    getHomePage,getDataTest,postCreateUser
}