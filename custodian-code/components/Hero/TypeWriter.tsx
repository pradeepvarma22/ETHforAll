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
                        .typeString(`<span className="">NFTs.</span>`)
                        .pauseFor(8)
                        .deleteAll()
                        .typeString('<span className="">Buy and Sell using Crypto and Fiat</span>')
                        .pauseFor(8)
                        .deleteAll()
                        .typeString('<span className="">Collectible Items.</span>')
                        .start();
                }}
            />

        </>
    )
}

export default TypewriterComponent
