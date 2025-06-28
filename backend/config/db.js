import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Shyam:<db_password>@cluster0.by8z1jv.mongodb.net/Resume-Builder")
    .then(() => console.log("DB Connected"));
}