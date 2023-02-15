
import { INFTItemEx } from "@/types/index"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { Container } from './styles'

interface IListedNftProp {
    nft: INFTItemEx,
}

const ListedNFt: React.FC<IListedNftProp> = ({ nft }) => {

    const { data, status } = useSession()
    const router = useRouter()


    function handleClick() {
        router.push(`/nft/${nft.tokenId}`)
    }

    return (
        <div onClick={handleClick}>
            <div className="rounded-xl duration-500 hover:scale-105  hover:shadow-xl px-5 py-10">
                <Container>
                    <img
                        src={nft.image}
                        alt={nft.name}
                    />
                    {nft.currentlyListed === false && <div className="text-red-300 font-bold text-xl pt-2">Sold</div>}
                    <section className="details-nft">
                        <span className="name">{nft.name}</span>
                        <div className="identify-artist">
                            <img
                                src="https://source.unsplash.com/random/200x200"
                                alt="avatar user"
                            />
                            <span>{nft.owner.toString().slice(0, 8) + "..." + nft.owner.toString().slice(28, 32)}</span>
                        </div>
                        <div className="values">
                            <div className="price">
                                <span className="title">Price</span>
                                <span>{nft.price} {nft.isFiat === true ? "USD" : "BIT"}</span>
                            </div>
                            <div className="highest-bid">
                                <span className="title">  </span>
                                <span>{nft.tokenId} : Id</span>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    )
}
export default ListedNFt
