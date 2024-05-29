const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    deletedAt: { type: Date }
});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
