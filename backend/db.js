const Pool = require("pg").Pool

console.log(process.env.POSTGRES_USER);

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

// const pool = new Pool({
//     user: "msihag",
//     host: host.docker.internal,
//     database: "perntodo",
//     password: "password",
//     port: 5432,
// });

module.exports = pool;