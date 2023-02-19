
import ListedNFt from "@/components/ListedNFts/ListedNft";
import { setUserNfts } from "@/state/app-slice";
import { store } from "@/state/store";
import { INFTItemEx, IStore } from "@/types";
import { getAllUserNfts } from "@/utils/nft";
import { ethers } from "ethers";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Blockies from "react-blockies-image";
import { useSelector } from "react-redux";
declare var window: any


export default function Profile() {


    const { data, status } = useSession()
    const nfts = useSelector((state: IStore) => state.userNfts)



    const [address, setAddress] = useState("")

    const connectToWallet = async () => {

        if (window.ethereum) {
            let provider = null;
            let signer = null;
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
            let _address = await signer.getAddress();
            _address = ethers.getAddress(_address)
            setAddress(_address)

        } else {
            console.log('Install MetaMask')
        }
    };

    async function onPageLoad() {
        let userNfts = await getAllUserNfts(address)
        console.log(userNfts)
        store.dispatch(setUserNfts(userNfts));
    }

    useEffect(() => {
        onPageLoad()
        connectToWallet();
    }, [address])

    return (
        <>
            <div className="flex items-center justify-center ">
                <div className=" p-4">
                    <h1 className="text-3xl font-bold text-gray-800"> </h1>

                    <div className="p-14 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            <Blockies seed={address} className="object-cover object-center w-full h-full rounded dark:bg-gray-500" size={15} scale={10} />

                        </div>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold">{data?.user?.name}</h2>
                                <span className="text-sm dark:text-gray-400"></span>
                            </div>
                            <div className="space-y-1">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                        <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                    </svg>
                                    <span className="dark:text-gray-400">{data?.user?.email}</span>
                                </span>
                                <div className="pt-2 px-1 text-base">{address}</div>

                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-start md:justify-center ">
                        {nfts.map((nft: INFTItemEx, index) => (
                            <div key={index}>
                                {
                                    nft.currentlyListed === true && <ListedNFt key={index} nft={nft} />
                                }
                            </div>
                        )
                        )}
                    </div>



                </div>
            </div>

        </>
    )
}

