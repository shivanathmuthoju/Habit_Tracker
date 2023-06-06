module.exports.home = (req, res) => {
    
    return res.render('dashboard.ejs');

}

module.exports.signOut = (req, res) => {
    return res.redirect('/');
}