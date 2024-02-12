import { Employee } from "../models/Employee.model";
import { Shift } from "../models/Shift.model";

export const startShift = async (empId: string) => {
  const employee = await Employee.findById(empId);
  if (!employee) return {t: 'Employee not found'};

  const now = new Date();

  const ongoingShift = await Shift.findOne({
    employee: employee._id,
    endTime: { $gt: now }
  });

  if (ongoingShift) return {error: 'Employee already has an ongoing shift'};

  const existingShiftSameDay = await Shift.findOne({
    employee: employee._id,
    date: {
      $gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      $lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    }
  });

  if (existingShiftSameDay)  return {error: 'Employee already has a shift on the same day'};

  const shift = new Shift({
    startTime: now,
    endTime: new Date(now.getTime() + 8 * 60 * 60 * 1000),
    employee: employee._id
  });

  await shift.save();
};
