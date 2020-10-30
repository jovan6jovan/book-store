const Koa = require("koa");
const Router = require("../router");
const bodyParser = require("koa-body-parser");
const cors = require("koa-cors");
const config = require("../config/api");
const db = require("../models");
// const seed = require("../models/seed/seed-db");

module.exports = async () => {
  const app = new Koa();

  app.use(bodyParser());

  app.use(cors());

  /**
   * Register api routes
   */
  const router = Router();
  app.use(router.routes()).use(router.allowedMethods());

  db.sequelize
    .sync({
      // force: true
    })
    .then(() => {
      app.listen(config.port, () => {
        console.log(`API running on port ${config.port}`);
      });
    });
};
