const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // ĐỊnh nghĩa tuyến đường router
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
