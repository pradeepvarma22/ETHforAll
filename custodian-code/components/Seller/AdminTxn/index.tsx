import { IClickStatus, IWalletState } from "@/types"
import { getSession, useSession } from "next-auth/react"
import { useState } from "react"
import { Session } from "next-auth";
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";



interface IProps {
    fileUrl: string;
    price: number;
}

// User Have No Wallet
const AdminTxn: React.FC<IProps> = ({ fileUrl, price }) => {



    const [clickStatus, setClickStatus] = useState<IClickStatus>(IClickStatus.CLICK_FALSE)
    const [wallet, setWallet] = useState<IWalletState>()


    // create Wallet

    // Ask User Whether It is required to save wallet on our side

    async function handleClick() {

        if (!fileUrl || !price) {
            console.log("price or fileurl is null")
            return
        }

        setClickStatus(IClickStatus.CLICK_TRUE)
        const user_session: any = await getSession()
        console.log(user_session.userid)

        const req = await fetch('/api/wallet/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user_session.userid })
        })
        const res = await req.json()
        console.log(res)
        const user_walletAddress = res.public_key

        const URI: string = process.env.NEXT_PUBLIC_MANTLE_URI_QUICKNODE!
        const jsonRPCProvider = new ethers.JsonRpcProvider(URI);
        const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_WALLET_PRIVATE_KEY!, jsonRPCProvider)
        const nftContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, wallet)
        let txn = await (await nftContract.createNFTByAdminWithWallet(fileUrl, user_walletAddress, price)).wait()
        console.log(txn)

        setClickStatus(IClickStatus.WORK_DONE)
    }



    return (
        <>
            {IClickStatus.CLICK_FALSE === clickStatus &&
                <div className="px-52 py-5">
                    <button onClick={handleClick}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Sell
                    </button></div>}

            {IClickStatus.CLICK_TRUE === clickStatus && <>Checking Wallet Status.....</>}
            {IClickStatus.WORK_DONE === clickStatus && <>TXN Success.....</>}



        </>
    )
}

export default AdminTxn
