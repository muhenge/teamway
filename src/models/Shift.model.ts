import { Schema, model, Document } from 'mongoose'

export interface IShift extends Document{
  employee: IShift;
  startTime: string;
  endTime: string;
}

export const ShiftSchema = new Schema<IShift>({
  employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
})

export const Shift = model<IShift>('Shift', ShiftSchema)
