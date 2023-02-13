
import { INFTItemEx } from "@/types/index"
import Image from 'next/image';
import Link from 'next/link';

interface IListedNftProp {
    nft: INFTItemEx,
}


const ListedNFt: React.FC<IListedNftProp> = ({ nft }) => {


    return (
        <>
            <div className=" card glass px-5 py-4 w-max bg-transparent shadow-md rounded-xl duration-500 hover:scale-105  hover:shadow-xl">
                <img
                    src={nft.image}
                    className="h-80 w-72 object-cover rounded-t-xl"
                />


            </div>


        </>
    )
}

export default ListedNFt
