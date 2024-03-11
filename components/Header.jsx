"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"


const Header = () => {
    const { data: session } = useSession();

    const links = [
        { name: "Home", link: "/" },
        { name: "Offers", link: "/offer" },
        { name: "About", link: "/" },
        { name: "Contact", link: "/" },
    ];

    const linksCreate = [
        { name: "Create address", link: "/create-address" },
        { name: "Create clinic", link: "/create-clinic" },
        { name: "Create destination", link: "/create-destination" },
        { name: "Create hotel", link: "/create-hotel" },
        { name: "Create offer", link: "/create-offer" },
    ];

    const linksView = [
        { name: "View address", link: "/display/address" },
        { name: "View clinic", link: "/display/clinic" },
        { name: "View destination", link: "/display/destination" },
        { name: "View hotel", link: "/display/hotel" },
        { name: "View offer", link: "/display/offer" },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenView, setDropdownOpenView] = useState(false);

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

                    {session?.user?.role === "admin" && (
                        <>
                            <div className="relative font-semibold my-7 md:my-0 md:ml-8">
                                <div className="flex text-black hover:text-gray-500 duration-500 cursor-pointer" onClick={() => setDropdownOpen((prev) => !prev)}>
                                    Create
                                    <Image
                                        src="/assets/icons/arrow-dropdown.svg"
                                        alt="Dropdown arrow icon"
                                        width={15}
                                        height={15}
                                    />
                                </div>

                                {dropdownOpen && (
                                    <div className="absolute mt-7 p-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul>
                                            {
                                                linksCreate.map(linkCreate => (
                                                    <li key={linkCreate.name} className="py-2">
                                                        <Link
                                                            href={linkCreate.link}
                                                            className="text-black hover:text-gray-500 duration-500 cursor-pointer"
                                                            onClick={() => setDropdownOpen(false)}
                                                        >
                                                            {linkCreate.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="relative font-semibold my-7 md:my-0 md:ml-8">
                                <div className="flex text-black hover:text-gray-500 duration-500 cursor-pointer" onClick={() => setDropdownOpenView((prev) => !prev)}>
                                    View
                                    <Image
                                        src="/assets/icons/arrow-dropdown.svg"
                                        alt="Dropdown arrow icon"
                                        width={15}
                                        height={15}
                                    />
                                </div>

                                {dropdownOpenView && (
                                    <div className="absolute mt-7 p-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul>
                                            {
                                                linksView.map(linkView => (
                                                    <li key={linkView.name} className="py-2">
                                                        <Link
                                                            href={linkView.link}
                                                            className="text-black hover:text-gray-500 duration-500 cursor-pointer"
                                                            onClick={() => setDropdownOpenView(false)}
                                                        >
                                                            {linkView.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {session?.user ? (
                        <>
                            <div className="font-semibold my-7 md:my-0 md:ml-8">
                                Hello, {session?.user?.firstName}
                            </div>
                            <button onClick={() => signOut()} className="sign_out_btn">
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link href="/register" className="sign_up_btn">
                            Sign Up
                        </Link>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default Header
