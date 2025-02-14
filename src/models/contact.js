import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    message:{
        type:String,

    },
    name:{
        type:String,
        required:true,
    
    },
    email:{
        type:String,
        required:true,
        
    },
    subject:{
        type:String
    },
},{timestamps:true})

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;