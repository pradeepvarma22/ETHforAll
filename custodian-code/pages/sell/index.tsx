import { useState } from "react";
import { IPaymentType, IStore } from "@/types";
import { setPayWith } from "@/state/app-slice";
import { useSelector } from "react-redux";
import { store } from "@/state/store";
import ViewNft from "@/components/Seller/ViewNft";
import NftInput from "@/components/Seller/NftInput";
import CheckWalletStatus from "@/components/Seller/WalletStatus";
import AdminTxn from "@/components/Seller/AdminTxn";
import ConnectTxn from "@/components/Seller/ConnectTxn";



export default function Sell() {

    const [nftName, setNftName] = useState("")
    const [nftDescription, setNftDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [fileUrl, setFileUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<any[]>([]);
    const payWith = useSelector((state: IStore) => state.payWith)
    const userHasWallet = useSelector((state: IStore) => state.userHasWallet)




    return (
        <>
            <div>
                <div className="grid grid-cols-2 gap-40">
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
                        <div>
                            {payWith === IPaymentType.CRYPTO &&

                                <div>
                                    <CheckWalletStatus />
                                </div>
                            }

                            {payWith === IPaymentType.CRYPTO && userHasWallet && <ConnectTxn price={price} fileUrl={fileUrl} />}
                            {payWith === IPaymentType.CRYPTO && !userHasWallet && <AdminTxn price={price} fileUrl={fileUrl} />}


                            {/* {payWith === IPaymentType.CREDIT_CARD  && <AdminTxn />} */}
                        </div>
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











            {loading && <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">.</span>
                </div>
            </div>}




        </>
    )
}
