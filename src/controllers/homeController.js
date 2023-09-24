const getHomePage=(req, res)=>{
    res.send('Hello World e2323')
}
const getDataTest=(req, res)=>{
    res.render('sample.ejs')
}
module.exports={
    getHomePage,getDataTest
}