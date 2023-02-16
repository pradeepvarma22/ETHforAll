import { setPayWith } from "@/state/app-slice";
import { store } from "@/state/store";
import { IPaymentType, IStore } from "@/types";
import { useSelector } from "react-redux";
import { NFTStorage } from "nft.storage";


interface IProps {
    setNftName: any;
    setNftDescription: any;
    setPrice: any;
    setLoading: any;
    setFiles: any;
    setFileUrl: any;
    nftName: string;
    nftDescription: string;
}


const NftInput: React.FC<IProps> = ({ setNftName, setNftDescription, setPrice, nftDescription, nftName, setFileUrl, setFiles, setLoading }) => {


    const payWith = useSelector((state: IStore) => state.payWith)


    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLInputElement;
        if (!e.target.files) return;
        setLoading(true);
        const imgFile = e.target.files[0];
        setFiles([URL.createObjectURL(imgFile)]);

        try {
            const token = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY!

            const client = new NFTStorage({ token })

            const metadata = await client.store({
                name: nftName,
                description: nftDescription,
                image: imgFile
                // attributes: attributes
            });
            let URI = metadata.url.replace("ipfs://", "https://ipfs.io/ipfs/")
            setFileUrl(URI);
            console.log(URI)
            setLoading(false);
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>

            <div className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="NFT Name" aria-label="" onChange={e => setNftName(e.target.value)} />
                </div>
            </div>

            <div className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="NFT Description" aria-label="" onChange={e => setNftDescription(e.target.value)} />
                </div>
            </div>

            <div className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" placeholder="NFT Price" aria-label="" onChange={e => setPrice(Number(e.target.value))} />
                </div>
            </div>

            <div className="h-32 w-64 pt-5">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer  rounded-md font-medium text-slate-200 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" onChange={handleUpload} className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="pt-16">

                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <p>Payment Should be in </p><br />

                        <li onClick={e => store.dispatch(setPayWith(IPaymentType.CRYPTO))}>
                            <input type="radio" name="paymentType" value={IPaymentType.CRYPTO} checked={payWith === IPaymentType.CRYPTO} className="hidden peer" />
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">Crypto</div>
                                </div>
                                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </label>
                        </li>
                        <li onClick={e => store.dispatch(setPayWith(IPaymentType.CREDIT_CARD))}>
                            <input type="radio" name="paymentType" value={IPaymentType.CREDIT_CARD}
                                className="hidden peer" checked={payWith === IPaymentType.CREDIT_CARD} />
                            <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">Credit Card</div>
                                </div>
                                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </label>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default NftInput
