import Project from "../models/project.js"
const addProject =  async (req, res) => {
    try {
      const newData = new Project(req.body);
      await newData.save();
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error 1", error });
    }
  }

const getProject = async (req, res)=>{
    try {
      const newData = await Project.find();
      
      res.json(newData);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }


  export {addProject, getProject}