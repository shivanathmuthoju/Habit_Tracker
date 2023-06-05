module.exports.signup = (req,res) => {
    if(req.isAuthenticated()) {
        return res.redirect('/user');
    } 

    return res.render('../views/signup.ejs')
}

module.exports.createUser = (req, res) => {
    
}