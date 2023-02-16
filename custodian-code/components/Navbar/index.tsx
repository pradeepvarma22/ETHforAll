import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import SignIn from "../Auth/SignIn"


const Navbar: React.FC = () => {


    const { data, status } = useSession()



    return (
        <>
            <nav className="flex justify-between px-20 py-10 items-center">
                <Link href="/">
                    <h1 className="text-xl text-gray-300 font-bold ">EthForAll</h1></Link>
                <div className="flex items-center">
                    <div className="flex items-center">

                        <input className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
                    </div>
                    <ul className="flex items-center space-x-16">
                        <li className="font-semibold text-white">Home</li>
                        <Link href="/sell">
                            <li className="font-semibold text-white">Sell</li>
                        </Link>
                        {status === "authenticated" &&
                            <li>
                                Profile
                            </li>
                        }
                        <li>
                            <SignIn />
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
