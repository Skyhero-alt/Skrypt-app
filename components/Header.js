import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {

    const {user}= useMoralis();

    return (
        <div className="text-white sticky top-0 z-10 p-5 bg-black shadow-sm border-b-2 border-blue-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    src="https://cdn.discordapp.com/attachments/905074139327516691/931890926509510746/skrypt-app.gif" />
                </div>

                <div className="text-left lg:text-center col-span-4">
                    <div className="relative h-48 w-48 lg:mx-auto border-white border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>
                    {/* Welcome message */}
                    <h1 className="text-3xl">Welcome to Skyhero's CryptoLand</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    {/* username */}
                    {/* Change username */}
                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
