import mongoose, { Document, Schema } from 'mongoose';

interface ICandidate extends Document {
  name: string;
  email: string;
  phone: string;
}

const CandidateSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export default mongoose.model<ICandidate>('Candidate', CandidateSchema);