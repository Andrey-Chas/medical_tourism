'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import DeleteConfirm from './DeleteConfirm';

const DropdownTable = ({ type, dataValue, data, setData }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleShowClick = () => {
        router.push(`/display-specific/${dataValue._id}?type=${type}`);
    }

    const handleEditClick = () => {
        router.push(`/update-${type}/?id=${dataValue._id}`);
    }

    const handleDeleteClick = () => {
        setIsDropdownOpen(false);
        setIsModalOpen(true);
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
                        <li className="link cursor-pointer" onClick={handleShowClick}>
                            Show
                        </li>
                        <li className="link cursor-pointer" onClick={handleEditClick}>
                            Edit
                        </li>
                    </ul>
                    <div className="link_delete py-1 cursor-pointer" onClick={handleDeleteClick}>
                        Delete
                    </div>
                </div>
            )}
            <DeleteConfirm
                type={type}
                isModalOpen={isModalOpen}
                data={data}
                setData={setData}
                dataValue={dataValue}
                setIsModalOpen={setIsModalOpen}
                isRouter={false}
            />
        </td>
    )
}

export default DropdownTable
