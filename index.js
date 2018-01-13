const config = require('./config/app');
const restify = require('restify');
const mongoose = require('mongoose');

const server = restify.createServer({
    name: config.api_name,
    version: config.api_version
});

server.use(restify.plugins.jsonBodyParser({ mapParams: true }));

server.listen(config.port, () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.database.uri, { useMongoClient: true });

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error(err);
        process.exit(1);
    });

    db.once('open', () => {
        require('./routes')(server);
        console.log(`Server is listening on port ${config.port}`);
    });
});
