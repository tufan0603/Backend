import Skill from "../models/skill.js"
const addSkill =  async (req, res) => {
    try {
      const newData = new Skill(req.body);
      await newData.save();
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error 1", error });
    }
  }

const deleteSkill = async(req,res)=>{
    try {
        const id = req.params.id
        await Skill.findByIdAndDelete(id);
        const skills = await Skill.find();
        res.status(201).json({ message: "Data deleted successfully" , data:skills });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
}

export {addSkill , deleteSkill}