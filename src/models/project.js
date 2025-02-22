import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    banner:{
        type:String,
    },
    title :{
        type:String
    },
    smallDescription:{
        type:String
    },
    bigDescription:{
        type:String,
    },
    github:{
        type:String,
    },
    Likes:{
        type:Number,
        default:0
    }

}, {
    timestamps:true
})

const Project = mongoose.model("Project",projectSchema)

export default Project