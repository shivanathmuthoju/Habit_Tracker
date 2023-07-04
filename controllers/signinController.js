module.exports.signin = (req, res) => { // sign in page route controller

    if(req.isAuthenticated()) {
        return res.redirect('/habits')
    }
    return res.render('signin.ejs')
}

module.exports.loginUser = (req, res) => { // sign in the user
    return res.redirect('/habits')
}