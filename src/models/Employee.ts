import { Schema, model, Document } from "mongoose";
import { IShift } from "./Shift";

export interface IEmployee extends Document {
  name: string;
  shifts: IShift[];
}

export const EmployeeSchema = new Schema<IEmployee>({
  name: { type: String, required: true },
  shifts: [{ type: Schema.Types.ObjectId, ref: 'Shift' }]
}, {timestamps: true})

export const Employee = model<IEmployee>('Employee', EmployeeSchema)
