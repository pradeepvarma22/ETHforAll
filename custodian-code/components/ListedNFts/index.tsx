import { useEffect } from "react"
import { getAllNfts } from "../../utils/nft"
import { INFTItemEx, IStore } from "@/types";
import { setAllNfts } from "@/state/app-slice";
import { useSelector } from "react-redux";
import { store } from "@/state/store";
import ListedNFt from "./ListedNft";


const ListedNFts: React.FC = () => {


    const allNfts = useSelector((state: IStore) => state.allNfts)

    async function onPageLoad() {
        const items: INFTItemEx[] = await getAllNfts()
        store.dispatch(setAllNfts(items))
    }

    useEffect(() => {
        onPageLoad()
    }, [])

    return (
        <>
            <h2 className="px-10 pt-10 text-3xl text-red-500 font-bold">Listed Nfts</h2>
            <div className="w-full flex flex-wrap justify-start md:justify-center ">
                {allNfts.map((nft: INFTItemEx, index) => (
                    <div key={index}>
                        {
                            nft.currentlyListed === true && <ListedNFt key={index} nft={nft} />
                        }
                    </div>
                )
                )}
            </div>

            <h2 className="px-10 text-3xl text-red-500 font-bold">Sold</h2>
            <div className="w-full flex flex-wrap justify-start md:justify-center">
                {allNfts.map((nft: INFTItemEx, index) => (
                    <div key={index}>
                        {
                            nft.currentlyListed === false && <ListedNFt key={index} nft={nft} />
                        }
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default ListedNFts

