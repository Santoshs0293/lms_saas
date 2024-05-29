const express = require('express');
const router = express.Router();
const Role = require('../models/RoleModel');

// Create a new role
router.post('/roles', async (req, res) => {
    const { role } = req.body;
    try {
        const newRole = new Role({ role });
        await newRole.save();
        res.status(201).send(newRole);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all roles
router.get('/roles', async (req, res) => {
    try {
        const roles = await Role.find({});
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
