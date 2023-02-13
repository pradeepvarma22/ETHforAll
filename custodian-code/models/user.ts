import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";

import type { IUser } from "../types/index";




export const UserSchema = new Schema<IUser>(
    {
        name: { type: String, require: false },
        email: { type: String, required: false },
        emailVerified: { type: Boolean, required: false },
        image: { type: String, required: false }
    }
);

const User: Model<IUser> = models.User || mongoose.model("User", UserSchema);
export default User;
