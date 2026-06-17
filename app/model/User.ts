import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
  username: string;
  email: string;
  password:string;
  createdAt: Date;
}

const userSchema:Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    unique: [true,"Email Alraedy In Use"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password should be atleast 8 characters"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User