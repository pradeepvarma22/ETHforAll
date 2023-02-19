import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/constants";
import { ethers } from "ethers";
import { useState } from "react"
declare var window: any


interface IProps {
    price: number;
    fileUrl: string;
}

const ConnectTxn: React.FC<IProps> = ({ fileUrl, price }) => {

    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false)
    const [provider, setProvider] = useState<any>()
    const [txn, setTxn] = useState<boolean>(false)


    const connectToWallet = async () => {

        if (window.ethereum) {
            let provider = null;     //new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_MANTLE_URI_QUICKNODE!)


            let signer = null;


            // Connect to the MetaMask EIP-1193 object. This is a standard
            // protocol that allows Ethers access to make all read-only
            // requests through MetaMask.
            provider = new ethers.BrowserProvider(window.ethereum)

            // It also provides an opportunity to request access to write
            // operations, which will be performed by the private key
            // that MetaMask manages for the user.
            signer = await provider.getSigner();




            setProvider(provider)
            setIsWalletConnected(true)
        } else {
            setIsWalletConnected(false)
            console.log('Install MetaMask')
        }
    };


    const handleSell = async () => {
		try{
		     const signer = await provider.getSigner()
			const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
			let txn = await (await contract.createNFTByUser(fileUrl, price)).wait()
			console.log(txn)
			setTxn(true)

		}catch(e){
		
		}
    };



    return (
        <>


            {!isWalletConnected && <div className="px-48 pt-8"><button onClick={connectToWallet} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Connect To Wallet</button></div>}

            {isWalletConnected && txn === false && <div className="px-48 pt-8"><button onClick={handleSell} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Sell</button></div>}

            {txn && <div className="px-56 pt-6">Txn Done..</div>}


        </>
    )
}

export default ConnectTxn

