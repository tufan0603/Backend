import express from "express";
import { addProject, getProject } from "../controllers/project.controller.js";


const router = express.Router();

router.post("/",addProject)
router.get("/", getProject)


export default router