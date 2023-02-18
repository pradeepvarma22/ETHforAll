
import AuctionList from "@/components/AuctionList"
import Hero from "@/components/Hero"
import ListedNFts from "@/components/ListedNFts"
import SoldNfts from "@/components/SoldNfts"
import { getAllNfts } from "@/utils/nft"

export default function Home() {





  return (
    <>

      <div className="">
        <Hero />
      </div>





      <ListedNFts />



      <h2 className="px-8 text-3xl py-3 text-red-500 font-bold">Auctions</h2>
      <AuctionList />



      <SoldNfts />




    </>
  )
}

