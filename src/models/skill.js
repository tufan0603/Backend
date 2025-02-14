import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    skillName:{
        type:String,

    },
    strength:{
        type:Number,
        
    
    },
    experience:{
        type:Number,
        
        
    },
},{timestamps:true})

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;