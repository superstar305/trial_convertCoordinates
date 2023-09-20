"use strict";

module.exports = async function (fastify, opts) {
  fastify.post("/add", function (req, reply) {
    const { lat, lng, notes } = req.body;
    if (lat === undefined || lng === undefined) {
      reply.send({
        status: "error",
        message: "Validation Error",
      });
    }

    var data = {
      lat: lat.value,
      lng: lng.value,
      notes: `DMS Latitude: ${
        notes?.value?.dmslat ?? "No defined"
      }, DMS Longitude: ${notes?.value?.dmslng ?? "No defined"}`,
    };

    fastify.mysql.query(
      "INSERT INTO coords SET ?",
      data,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  fastify.get("/getAll", function (req, reply) {
    fastify.mysql.query(
      "SELECT * FROM coords ORDER BY id desc",
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
      "UPDATE coords SET ? WHERE id = ? LIMIT 1",
      [data, id.value],
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });

  fastify.post("/delete", function (req, reply) {
    const { id } = req.body;
    fastify.mysql.query(
      "DELETE FROM coords WHERE id = ?",
      id.value,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });
};
