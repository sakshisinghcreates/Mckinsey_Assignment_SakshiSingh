import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IAccount extends Document {
  username: string;
  password: string;
  role: string;
  comparePassword(password: string): Promise<boolean>;
}

const AccountSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

AccountSchema.pre<IAccount>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

AccountSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IAccount>('Account', AccountSchema);