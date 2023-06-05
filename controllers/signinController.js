// sign in controller

module.exports.signin = (req,res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/user');
    }

    return res.render('../views/signin.ejs')
}

module.exports.login = (req, res) => {
    
    return res.redirect('/user')
}