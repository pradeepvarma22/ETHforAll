import Typewriter from "typewriter-effect";

const TypewriterComponent: React.FC = () => {

    return (
        <>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('<span className="">NFT MarketPlace.</span>')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('<span className="">Collectible Items.</span>')
                        .pauseFor(200)
                        .deleteAll()
                        .typeString('<span className="">NFTs.</span>')
                        .start();
                }}
            />

        </>
    )
}

export default TypewriterComponent

