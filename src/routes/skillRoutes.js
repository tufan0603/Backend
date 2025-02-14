import express from "express";
import { addSkill , deleteSkill } from "../controllers/skill.controllers.js";


const router = express.Router();

router.post("/",addSkill)
router.delete("/:id" , deleteSkill)

export default router