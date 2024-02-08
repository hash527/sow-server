'use strict'

require('dotenv/config');

const fp = require('fastify-plugin')
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/postgres'), {
        errorHandler: false,
        connectionString: process.env.pg

    })
})
