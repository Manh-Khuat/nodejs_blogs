const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    // ĐỊnh nghĩa tuyến đường router
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
