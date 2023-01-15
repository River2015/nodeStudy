const { Client } = require('pg')

const client = new Client({
    host: 'my.database-server.com',
    port: 5334,
    user: 'database-user',
    password: 'secretpassword!!',
})
