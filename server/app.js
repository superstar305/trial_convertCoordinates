const path = require("path");
const AutoLoad = require("@fastify/autoload");

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/mysql"), {
    connectionString: `${process.env.DB_SERVER}://${process.env.DB_USER}@localhost/${process.env.DB_NAME}`,
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
