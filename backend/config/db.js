import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Shyam:Shyam_1225@cluster0.by8z1jv.mongodb.net/Resume-Builder")
    .then(() => console.log("DB Connected"));
}