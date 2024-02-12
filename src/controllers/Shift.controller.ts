import { Request, Response } from "express";
import { startShift } from "../services/shift.service";

export const create = async (req: Request, res: Response) => {
  const empParams = req.params.id;
  try {
    const shift = await startShift(empParams);
    return res.json({ message: 'New shift created', data: shift });
  } catch (error) {
    res.status(500).json({ error })
    console.error(error);
  }


}
