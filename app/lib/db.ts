import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

export default async function ConnectToDB() {
  if (!URI) {
    throw new Error("Error with the URI.");
  }
  try {
    await mongoose.connect(URI);
    console.log("Successfully connected.");
  } catch (error) {
    console.log(error);
  }
}
