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
        console.log(2)
        const items: INFTItemEx[] = await getAllNfts()
        store.dispatch(setAllNfts(items))
    }

    useEffect(() => {
        onPageLoad()
    }, [])

    return (
        <>
            <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center ">
                {allNfts.map((nft: INFTItemEx, index) => (
                    <div key={index}>
                        {
                            nft.currentlyListed === true && <ListedNFt key={index} nft={nft} />
                        }
                    </div>
                )
                )}
            </div>

            <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
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

