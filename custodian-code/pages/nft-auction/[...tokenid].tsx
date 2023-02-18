import { getNftByTokenId } from '@/utils/nft';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { INFTItemEx, IStore } from '@/types/index'
import { useSession } from 'next-auth/react';
import { ethers } from 'ethers';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants';
import StripePayment from '@/components/Seller/StripePayment';
declare var window: any





export default function NftAuction() {
  const router = useRouter()
  const { data, status } = useSession()
  const [nft, setNft] = useState<INFTItemEx>()
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false)
  const [provider, setProvider] = useState<any>()
  const [txnDone, setTxnDone] = useState<boolean>(false)


  const connectToWallet = async () => {

    if (window.ethereum) {
      let _provider = null;
      let signer = null;
      _provider = new ethers.BrowserProvider(window.ethereum)
      signer = await _provider.getSigner();

      setProvider(_provider)
      setIsWalletConnected(true)
    } else {
      setIsWalletConnected(false)
      console.log('Install MetaMask')
    }
  };




  async function getNftById(tokenid: number) {
    let _nft: INFTItemEx = await getNftByTokenId(tokenid)
    setNft(_nft)
  }

  async function onPageLoad(tokenid: number) {
    await getNftById(tokenid)
  }

  async function handleSell() {
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
    await (await contract.executeSale(nft?.tokenId, { value: ethers.parseUnits(String(nft?.price), "ether") })).wait()

    setTxnDone(true)

  }


  useEffect(() => {
    if (router.isReady && router.query.tokenid) {
      onPageLoad(Number(router.query.tokenid))
    }
    else {
    }
  }, [router.isReady])


  



  return (
    <>
      <div>
        <div className="container px-5 py-24 mx-auto"   >
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img src={nft?.image} alt={nft?.name} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"   >
              <div className="text-xl title-font text-gray-300 tracking-widest"   >{nft?.name}
                {
                  nft?.currentlyListed === false && <div className="text-red-500 font-bold">
                    Sold
                  </div>

                }

              </div>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">{nft?.tokenId} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed pb-5 text-justify">{nft?.description}</p>
              <div className="flex">


                <div className="flex ml-auto text-white focus:outline-none rounded">
                  {""}
                </div>

                <span className=" title-font font-medium text-2xl text-white">{nft?.price} {nft?.isFiat === true ? "USD" : "BIT"}</span>
                <button className="rounded-full  w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              {
                nft?.currentlyListed === true &&
                <div className="flex pt-6">
                  {!isWalletConnected && nft?.isFiat === false && <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={connectToWallet}>Connect to wallet</button>}

                  {isWalletConnected && txnDone === false && nft?.isFiat === false && <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleSell}>Sell</button>}

                  {txnDone && <>Txn Done</>}
                </div>
              }

              {
                nft?.currentlyListed === true && nft?.isFiat === true &&  <StripePayment nft={nft} />
              }



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

