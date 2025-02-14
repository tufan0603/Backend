import Contact from "../models/contact.js";

const addContact = async (req, res)=>{
    try {
        const newData = new Contact(req.body);
        await newData.save();
        res.status(201).json({ message: "Data saved successfully" });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
}

const getContact = async (req, res)=>{
  try {
    const newData = await Contact.find();
    
    res.json(newData);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}


const deleteContact = async(req,res)=>{
  try {
      const id = req.params.id
      await Contact.findByIdAndDelete(id);
      const data = await Contact.find();
      res.status(201).json({ message: "Data deleted successfully" , data:data});
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
}


export {addContact , getContact , deleteContact}