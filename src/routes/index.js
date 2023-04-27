const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
  // ĐỊnh nghĩa tuyến đường
  app.use('/news', newsRouter);
  
  app.use('/', siteRouter);

}

module.exports = route;
