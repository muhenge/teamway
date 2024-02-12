import express from "express";
import { create } from "../controllers/Shift.controller";

const shiftRoutes = express.Router()

shiftRoutes.post('/shifts/:id', create)

export default shiftRoutes
