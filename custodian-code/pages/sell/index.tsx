import { useState } from "react";
import { IPaymentType, IStore } from "@/types";
import { setPayWith } from "@/state/app-slice";
import { useSelector } from "react-redux";
import { store } from "@/state/store";
import ViewNft from "@/components/Seller/ViewNft";
import NftInput from "@/components/Seller/NftInput";



export default function Sell() {

    const [nftName, setNftName] = useState("")
    const [nftDescription, setNftDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [fileUrl, setFileUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<any[]>([]);


    const payWith = useSelector((state: IStore) => state.payWith)
    console.log(payWith)







    return (
        <>
            <div>
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid place-items-center">

                            <NftInput
                                nftDescription={nftDescription}
                                nftName={nftName}
                                setFileUrl={setFileUrl}
                                setFiles={setFiles}
                                setLoading={setLoading}
                                setNftDescription={setNftDescription}
                                setNftName={setNftName}
                                setPrice={setPrice} />
                        </div>

                        <div className="">

                            <ViewNft
                                fileUrl={fileUrl}
                                files={files}
                                nftDescription={nftDescription}
                                nftName={nftName}
                                price={price} />

                        </div>
                    </div>






                </div>







            </div>









            {loading && <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">.</span>
                </div>
            </div>}




        </>
    )
}
