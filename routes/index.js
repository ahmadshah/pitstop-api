const errors = require('restify-errors');
const InventoryModel = require('../inventory/models/inventory');

module.exports = function(server) {
    server.get('/inventories', (req, res, next) => {
        InventoryModel.apiQuery(req.params, function (err, docs) {
            if (err) {
                console.error(err);
                return next(
                    new errors.InvalidContentError(err.errors.name.message)
                );
            }

            res.send(docs);
            next();
        });
    });

    server.post('/inventories', (req, res, next) => {
        if (!req.is('application/json')) {
            return next (
                new errors.InvalidContentError("Expecting 'application/json'")
            );
        }

        let data = req.body ||{};
        let inventory = new InventoryModel(data);
        inventory.save((err) => {
            if (err) {
                console.log(err);
                return next (
                    new errors.InternalError(err.message)
                );
            }

            res.send(201);
            next();
        });
    });
};