import mongoose from "mongoose";

export const database = async () => {
    return await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB!);
};
