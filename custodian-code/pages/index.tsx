
import AuctionList from "@/components/AuctionList"
import Hero from "@/components/Hero"
import ListedNFts from "@/components/ListedNFts"
import { getAllNfts } from "@/utils/nft"

export default function Home() {





  return (
    <>

      <div className="">
        <Hero />
      </div>

      <h2 className="px-8 text-3xl py-3 text-red-500 font-bold">Auctions</h2>
      <AuctionList />



      <ListedNFts />



    </>
  )
}

