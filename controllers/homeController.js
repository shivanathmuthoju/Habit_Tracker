module.exports.home = (req, res) => {

    if(req.isAuthenticated()) {
        return res.redirect('/user');
    }

    return res.render('welcome.ejs')
}