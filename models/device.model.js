const mongoose = require('mongoose')

const DeviceSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name of the device is required"]
        },
        quantity:{
            type:Number,
            default:0,
            required:[true,"Quantity of the device is required"]
        },
        price:{
            type:Number,
            required:[true , "Price of the device is required"]
        },
        manufactured_date:{
            type:Date,
            required:[true,"Date of Manufacture is required"]
        }
    },
    {
        timestamps:true
    }
);

const Device = mongoose.model('Device',DeviceSchema)
module.exports = Device