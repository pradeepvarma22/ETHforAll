import mongoose, { models, Schema, Types } from "mongoose";

import type { Model } from "mongoose";

import type { IWallet, IUser } from "../types/index";



export const WalletSchema = new Schema<IWallet>(
    {
        public_key: { type: String, required: true },
        private_key: { type: String, required: false },
        wallet_mnemonic_phrase: { type: String, required: false },
        userObjectId: { type: String, required: true }
    }
);

const Wallet: Model<IWallet> = models.Wallet || mongoose.model("Wallet", WalletSchema);
export default Wallet;
