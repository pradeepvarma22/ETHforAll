import { setAuctionNfts } from "@/state/app-slice";
import { store } from "@/state/store";
import { IAuctionEx } from "@/types";
import { getAllAuctionNfts } from "@/utils/nft";
import { useEffect } from "react";
import styles from "./Hero.module.scss";
import TypewriterComponent from "./TypeWriter";


export default function HeroSection() {


    async function getAuctionNfts() {
        const _data: IAuctionEx[] = await getAllAuctionNfts()
        store.dispatch(setAuctionNfts(_data))
    }

    async function onPageLoad() {
        await getAuctionNfts() 
    }

    useEffect(()=>{
        onPageLoad()
    },[])


    return (
        <>
            <div className={styles.main}>
                <div className={styles.sub1}>
                    <div className={styles.sub1_head}>
                        Discover Digital Art & Collect NFTs
                    </div>
                    <div className="text-3xl font-bold text-red-400">
                        <TypewriterComponent />
                    </div>
                    <div className={styles.button}>
                        <button className={styles.buttoninner}>
                            Get Started
                        </button>
                    </div>
                    <div>
                        <div className={styles.sub1_trends}>
                            <div className="">240k+</div>
                            <div className="">100k+</div>
                            <div className="">240k+</div>
                        </div>
                        <div className={styles.sub1_trends2}>
                            <div className="">Total Sale</div>
                            <div className="">Auctions</div>
                            <div className="">Artists</div>
                        </div>
                    </div>
                </div>
                <div className={styles.sub2}>
                    <div className="">
                        <img src="/hero_image.jpg" className="rounded-t-xl" style={{ height: 350 }} alt="" />
                    </div>
                    <div className={styles.sub2_text}>
                        <div className={styles.sub2_texthead}>Apequest</div>
                        <div className={styles.sub2_textcreator}>
                            <img src="/hero_creator.svg" alt="" />
                            <div className="">Animakid</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
