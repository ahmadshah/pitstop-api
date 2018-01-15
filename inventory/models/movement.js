const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const mongooseStringQuery = require('mongoose-string-query');

const InventoryMovementSchema = new mongoose.Schema(
    {
        type: String,
        quantity: Number
    },
    { minimize: true }
);

InventoryMovementSchema.plugin(timestamps);
InventoryMovementSchema.plugin(mongooseStringQuery);
module.exports = mongoose.model('InventoryMovement', InventoryMovementSchema);