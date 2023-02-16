import { setUserHasWallet } from "@/state/app-slice";
import { store } from "@/state/store";
import { IPaymentType, IStore } from "@/types";
import { useSelector } from "react-redux";


interface IProps {
}


const CheckWalletStatus: React.FC<IProps> = ({ }) => {





    const userHasWallet = useSelector((state: IStore) => state.userHasWallet)



    useSelector((state: IStore) => state.walletAddress)


    return (
        <>
            <div className="px-24">
                <ul className="grid w-full gap-6 md:grid-cols-2 pt-5">
                    <li onClick={(e) => store.dispatch(setUserHasWallet(false))}>
                        <input type="radio" name="walletType" checked={userHasWallet === false} className="hidden peer" />
                        <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">No Wallet</div>
                            </div>
                            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </label>
                    </li>
                    <li onClick={(e) => store.dispatch(setUserHasWallet(true))}>
                        <input type="radio" name="walletType"
                            className="hidden peer" checked={userHasWallet === true} />
                        <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div className="block">
                                <div className="w-full text-lg font-semibold">Wallet</div>
                            </div>
                            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </label>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default CheckWalletStatus
