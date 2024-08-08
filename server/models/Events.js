const moongoose = require("mongoose")

const eventSchema = moongoose.Schema({
    title:{
        type:String
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    },
    color:{
        type:String,
    },
    allDay:{
        type:Boolean,
        default:true,
    },
},{timestamp:true})

module.exports = Events = moongoose.model('events',eventSchema)