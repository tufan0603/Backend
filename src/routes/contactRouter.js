import express from "express"
import { addContact, getContact, deleteContact } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", addContact)
router.get("/",getContact)
router.delete("/:id",deleteContact)

export default router