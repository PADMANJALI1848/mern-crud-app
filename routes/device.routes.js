const express = require('express')
const mongoose = require('mongoose')
const Device = require('../models/device.model')
const {getDevice , getDevices , addDevice, updatDevice , deleteDevice} = require('../controllers/device.controller.js')

const router = express.Router()

router.get('/',getDevices);
router.get('/:id',getDevice);
router.post('/',addDevice);
router.put('/:id',updatDevice);
router.delete('/:id',deleteDevice);

module.exports = router
