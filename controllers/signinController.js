module.exports.signin = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/habits')
    }
    return res.render('signin.ejs')
}

module.exports.loginUser = (req, res) => {
    return res.redirect('/habits')
}