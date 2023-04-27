const newsRouter = require('./news');

function route(app) {
  // ĐỊnh nghĩa tuyến đường
  app.get("/", (req, res) => {
    res.render("home");
  });

//   app.get("/news", (req, res) => {
//     res.render("news");
//   });

  app.use('/news', newsRouter);

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.post("/search", (req, res) => {
    res.send("");
  });

  // app.post('/search', (req, res) => {
  //   res.render('search');
  // });
}

module.exports = route;
