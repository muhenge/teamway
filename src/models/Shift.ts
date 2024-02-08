import { Schema, model, Document } from 'mongoose'

export interface IShift extends Document{
  employee: IShift;
  date: Date;
  startTime: Date;
  endTime: Date;
}

export const ShiftSchema = new Schema<IShift>({
  employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
})

export const Shift = model<IShift>('Shift', ShiftSchema)
