const express = require('express')
const mongoose = require('mongoose')
const Device = require('../models/device.model')

const getDevices = async (req,res)=>{
    try {
        const devices = await Device.find({});
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({message:error.message});

    }
};

const getDevice = async (req,res)=>{
    try {
        const {id} = req.params;
        const device = await Device.findById(id);
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const addDevice = async (req,res)=>{
    try {
        const device = await Device.create(req.body);
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const updatDevice = async (req,res)=>{
    try {
        const {id} = req.params;
        const device = await Device.findByIdAndUpdate(id , req.body);

        const updatedDevice = await Device.findById(id);
        res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

const deleteDevice = async (req,res)=>{
    try {
        const {id} = req.params;
        await Device.findByIdAndDelete(id);
        res.status(200).json({message:"Device deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

module.exports = { getDevice , getDevices , addDevice, updatDevice , deleteDevice }