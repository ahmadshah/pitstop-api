const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const mongooseStringQuery = require('mongoose-string-query');

const InventorySchema = new mongoose.Schema(
    {
        name: String,
        sku: String,
        
    },
    { minimize: true }
);

InventorySchema.plugin(timestamps);
InventorySchema.plugin(mongooseStringQuery);
module.exports = mongoose.model('Inventory', InventorySchema);