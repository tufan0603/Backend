import express from "express"
import 'dotenv/config'
import cors from "cors"
const app = express();
import connectDB from "./src/db/index.js"
import Contact from "./src/models/contact.js"
import Skill from "./src/models/skill.js"
import skillRouter from "./src/routes/skillRoutes.js"
import contactRouter from "./src/routes/contactRouter.js"
import projectRouter from "./src/routes/projectRouter.js"

// app.get("/", (req, res)=>{})
    app.use(cors())
    app.use(express.json())
    connectDB();

    console.log(Contact)
    app.get("/", (req,res)=>{
        res.send("Hello")
    })

    app.put("/skill/:id", async(req,res)=>{
      const id = req.params.id
      try {
        const skill = await Skill.findById(id)
        res.json(skill)
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
    })

    app.use("/contact", contactRouter);
 
    app.use("/contact/:id", contactRouter) 
      
    app.use("/skill",skillRouter)

    app.use("/skill/:id",skillRouter)

    app.use("/project",projectRouter)
    // app.get("/project",(req,res)=>{
    //   res.send("Project")
    // })
      
      
      

    app.get("/skill", async(req, res)=>{
        try {
          const data = await Skill.find()
          res.json(data);
          
        } catch (error) {
          res.status(500).json({ message: "Server error", error });
        }
      })





app.listen(process.env.PORT || 4000, ()=>{
    console.log("App is listening on port no 4000")
})