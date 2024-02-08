'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', function (req, reply) {
        fastify.pg.query(
            'SELECT * from product',
            function onResult(err, result) {
                reply.send(err || result.rows)
            }
        )
    })
}
