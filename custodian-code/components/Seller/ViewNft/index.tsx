import { IPaymentType, IStore } from "@/types";
import { useSelector } from "react-redux";


interface IProps {
    nftName: string;
    nftDescription: string;
    price: number;
    files: any[];
    fileUrl: string;
}


const ViewNft: React.FC<IProps> = ({ nftName, nftDescription, price, files, fileUrl }) => {


    const payWith = useSelector((state: IStore) => state.payWith)





    return (
        <>
            <div>{nftName}</div>
            <div>{nftDescription}</div>
            <div>{price} {payWith === IPaymentType.CREDIT_CARD ? "USD" : "BIT"}</div>

            <div>
                <div className="w-96 h-96 p-2">

                    {files && files.map((item, index) => (
                        <div className="w-full rounded" key={index}>
                            <img src={item}
                                alt="image" />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <a href={fileUrl} >
                    {fileUrl}
                </a>
            </div>

        </>
    )
}

export default ViewNft
