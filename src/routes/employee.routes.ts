import express from "express";
import { register } from "../controllers/Employee.controller";

const employeeRoute = express.Router();


employeeRoute.post('/employees', register);

export default employeeRoute;
