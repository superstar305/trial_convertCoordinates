const path = require("path");
const AutoLoad = require("@fastify/autoload");

const { DB_SERVER, DB_USER, DB_NAME } = "./config/db";

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/mysql"), {
    connectionString: `${DB_SERVER}://${DB_USER}@localhost/${DB_NAME}`,
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
