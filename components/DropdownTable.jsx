'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const DropdownTable = ({ type, dataValue }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const handleShowClick = () => {
        router.push(`/display-specific/${dataValue._id}?type=${type}`);
    }

    return (
        <td className="px-6 py-4 flex items-center justify-end">
            <div className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" onClick={() => setIsDropdownOpen((prev) => !prev)}>
                <Image
                    src="/assets/icons/dots-dropdown.svg"
                    alt="Dropdown dots icon"
                    width={15}
                    height={15}
                />
            </div>
            {isDropdownOpen && (
                <div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li className="link" onClick={handleShowClick}>
                            Show
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="link"
                                onClick={() => setIsDropdownOpen(false)}
                            >
                                Edit
                            </Link>
                        </li>
                    </ul>
                    <div className="py-1">
                        <Link
                            href="/"
                            className="link_delete"
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            Delete
                        </Link>
                    </div>
                </div>
            )}
        </td>
    )
}

export default DropdownTable
