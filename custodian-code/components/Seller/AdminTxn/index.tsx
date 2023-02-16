import { IClickStatus, IWalletState } from "@/types"
import { getSession, useSession } from "next-auth/react"
import { useState } from "react"
import { Session } from "next-auth";



interface IProps {
}

// User Have No Wallet
const AdminTxn: React.FC<IProps> = ({ }) => {



    const [clickStatus, setClickStatus] = useState<IClickStatus>(IClickStatus.CLICK_FALSE)
    const [wallet, setWallet] = useState<IWalletState>()


    // create Wallet

    // Ask User Whether It is required to save wallet on our side

    async function handleClick() {

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
        












        setClickStatus(IClickStatus.WORK_DONE)
    }



    return (
        <>
            {IClickStatus.CLICK_FALSE === clickStatus && <button onClick={handleClick}>Sell</button>}
            {IClickStatus.CLICK_TRUE === clickStatus && <>Please Wait.....</>}
            {IClickStatus.WORK_DONE === clickStatus && <>TXN Success.....</>}








        </>
    )
}

export default AdminTxn
