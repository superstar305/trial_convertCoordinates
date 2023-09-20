"use strict";
const table_name = "coords_data";
module.exports = async function (fastify, opts) {
  fastify.post("/add", function (req, reply) {
    const { lat, lng, notes } = req.body;
    console.log(req.body);
    console.log(lat);
    if (lat === undefined || lng === undefined) {
      reply.send({
        status: "error",
        message: "Validation Error",
      });
    }

    var data = {
      lat: lat,
      lng: lng,
      notes: `DMS Latitude: ${notes?.dmslat ?? "No defined"}, DMS Longitude: ${
        notes?.dmslng ?? "No defined"
      }`,
    };

    fastify.mysql.query(
      `INSERT INTO ${table_name} SET ?`,
      data,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  fastify.get("/getAll", function (req, reply) {
    fastify.mysql.query(
      `SELECT * FROM ${table_name} ORDER BY id desc`,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  fastify.post("/update", function (req, reply) {
    const { id, lat, lng, notes } = req.body;

    var data = {
      lat: lat.value,
      lng: lng.value,
      notes: `DMS Latitude: ${
        notes?.value?.dmslat ?? "No defined"
      }, DMS Longitude: ${notes?.value?.dmslng ?? "No defined"}`,
    };

    fastify.mysql.query(
      `UPDATE ${table_name} SET ? WHERE id = ? LIMIT 1`,
      [data, id.value],
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  fastify.post("/delete", function (req, reply) {
    const { id } = req.body;
    fastify.mysql.query(
      `DELETE FROM ${table_name} WHERE id = ?`,
      id.value,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });
};
