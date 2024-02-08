'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', function (req, reply) {
        fastify.pg.query(
            'SELECT * from user_location WHERE ID=1',
            function onResult(err, result) {
                reply.send(err || result.rows)
            }
        )
    })
}
