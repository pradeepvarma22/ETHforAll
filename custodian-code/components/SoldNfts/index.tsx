import { INFTItemEx, IStore } from "@/types";
import { useSelector } from "react-redux";
import ListedNFt from "../ListedNFts/ListedNft";


const SoldNfts: React.FC = () => {


    const allNfts = useSelector((state: IStore) => state.allNfts)


    return (
        <>
            <h2 className="px-10 pt-14 text-3xl text-red-500 font-bold">Sold</h2>
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

export default SoldNfts

