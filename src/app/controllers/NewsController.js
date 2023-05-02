class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // get :slug
    show(req, res) {
        res.send('NEW DEATAIL!!!');
    }
}

module.exports = new NewsController();
