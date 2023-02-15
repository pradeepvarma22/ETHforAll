import { useState } from "react";
import { File, NFTStorage } from "nft.storage";



export default function Sell() {

    const [nftName, setNftName] = useState("")
    const [nftDescription, setNftDescription] = useState("")
    const [fileUrl, setFileUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<any[]>([]);




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
            let URI = metadata.url
            setFileUrl(URI);
            console.log(URI)
            setLoading(false);
        } catch (error) {
            console.error(error)
        }

    }


    return (
        <>

            

            <div>



                <div>


                    <div className="grid grid-cols-2 gap-4">
                    
                        <div className="grid place-items-center">
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
                            <div className="h-32 w-64">
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
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
                        </div>
                        <div className="">
                            <div>{nftName}</div>
                            <div>{nftDescription}</div>
                            <div>
                                <a href={fileUrl}>
                                    {fileUrl}
                                </a></div>
                            <div>
                                <div className="w-80 h-80">

                                    {files && files.map((item, index) => (
                                        <div className="w-full rounded" key={index}>
                                            <img src={item}
                                                alt="image" />
                                        </div>
                                    ))}

                                </div>





                            </div>

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
