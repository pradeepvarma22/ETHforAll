import styles from "./Hero.module.scss";
import TypewriterComponent from "./TypeWriter";


export default function HeroSection() {
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
                    <div className={styles.sub2_image}>
                        <img src="/hero_image.svg" alt="" />
                    </div>
                    <div className={styles.sub2_text}>
                        <div className={styles.sub2_texthead}>Space Walking</div>
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
