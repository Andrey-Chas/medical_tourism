"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Header = () => {
    const links = [
        { name: "Home", link: "/" },
        { name: "Offers", link: "/offer" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow-md w-full fixed top-0 left-0">
            <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
                {/* Main Name */}

                <Link href="/" className="flex text-2x1 cursor-pointer items-center gap-1">
                    <Image
                        src="/assets/icons/hospital.svg"
                        alt="Logo Of Medical Tourism"
                        width={25}
                        height={25}
                    />
                    <span className="font-bold">Medical Tourism</span>
                </Link>

                {/* Menu On Mobile Devices */}

                <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
                    {isOpen ?
                        <Image
                            src="/assets/icons/close.svg"
                            alt="Menu on mobile devices"
                            width={25}
                            height={25}
                        /> :

                        <Image
                            src="/assets/icons/menu-app.svg"
                            alt="Close menu on mobile devices"
                            width={25}
                            height={25}
                        />
                    }
                </div>

                {/* Navigation Links */}

                <ul className={`menu_app ${isOpen ? "top-12" : "top-[-490px]"}`}>
                    {
                        links.map(link => (
                            <li key={link.name} className="font-semibold my-7 md:my-0 md:ml-8">
                                <Link
                                    href={link.link}
                                    className="text-black hover:text-gray-500 duration-500"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                    <button className="sign_up_btn">
                        Sign Up
                    </button>
                </ul>
            </div>
        </header>
    )
}

export default Header
