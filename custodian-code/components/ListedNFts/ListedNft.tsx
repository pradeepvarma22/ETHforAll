
import { INFTItemEx } from "@/types/index"
// import Image from 'next/image';
// import Link from 'next/link';

interface IListedNftProp {
    nft: INFTItemEx,
}


// const ListedNFt: React.FC<IListedNftProp> = ({ nft }) => {


//     return (
//         <>
//             <div className=" card glass px-5 py-4 w-max bg-transparent shadow-md rounded-xl duration-500 hover:scale-105  hover:shadow-xl">
//                 <img
//                     src={nft.image}
//                     className="h-80 w-72 object-cover rounded-t-xl"
//                 />


//             </div>


//         </>
//     )
// }

// export default ListedNFt
import { Container } from './styles'


const ListedNFt: React.FC<IListedNftProp> = ({ nft }) => {
    return (
        <div className="rounded-xl duration-500 hover:scale-105  hover:shadow-xl px-5 py-10">
            <Container>
                <img
                    src={nft.image}
                    alt="image nft"
                />

                <section className="details-nft">
                    <span className="name">Distant Galaxy</span>

                    <div className="identify-artist">
                        <img
                            src="https://source.unsplash.com/random/200x200"
                            alt="avatar user"
                        />
                        <span>by Animakid</span>
                    </div>

                    <div className="values">
                        <div className="price">
                            <span className="title">Price</span>
                            <span>1.63 ETH</span>
                        </div>
                        <div className="highest-bid">
                            <span className="title">Highest Bid</span>
                            <span>0.33 wETH</span>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}
export default ListedNFt
