import mongoose, { Document, Schema } from 'mongoose';

interface IQuestion extends Document {
  text: string;
  options: string[];
  correctOption: string;
  marks: number;
  negativeMarks: number;
  tags: string[];
}

const QuestionSchema: Schema = new Schema({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: String, required: true },
  marks: { type: Number, required: true },
  negativeMarks: { type: Number, required: true },
  tags: { type: [String], required: true },
});

export default mongoose.model<IQuestion>('Question', QuestionSchema);