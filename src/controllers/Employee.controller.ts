import { Request, Response } from "express";
import { Employee, IEmployee } from "../models/Employee.model";

export const startShift = async (req: Request, res: Response) => {

}

export const register = async (req: Request, res: Response) => {
  const { name } = req.body

  const employee = new Employee({
    name
  })

  await employee.save();

  return res.json({ message: 'New employee created', data: employee });

}
