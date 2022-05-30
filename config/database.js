const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log(`The ${db.name} building is being used by ${db.host} and they have ${db.port} things to do`);
})


module.exports = mongoose