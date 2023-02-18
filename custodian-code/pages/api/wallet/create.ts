import { database } from '@/models/db_connect'
import User from '@/models/user'
import Wallet from '@/models/wallet'
import { ethers } from 'ethers'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    await database();


    const user_id = req.body.userId

    let _res = await User.findById(user_id);


    let walletStatus = await Wallet.findOne({ userObjectId: user_id })



    if (_res && !walletStatus) {
        const tempWallet = ethers.Wallet.createRandom()

        walletStatus = await Wallet.create(({ private_key: tempWallet.privateKey, wallet_mnemonic_phrase: tempWallet.mnemonic?.phrase, public_key: tempWallet.address, userObjectId: user_id }))

        _res.set({ wallet_address: tempWallet.address });
        await _res.save();

    }

    let public_key = walletStatus?.public_key

    res.status(200).json({ public_key })
}
