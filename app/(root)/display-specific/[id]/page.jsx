'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from 'next-auth/react';

import DisplaySpecificData from "@/components/DisplaySpecificData";

const ViewSpecificData = ({ params }) => {
    const { data: session } = useSession();
    const [specificData, setSpecificData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddress, setIsAddress] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    useEffect(() => {
        const fetchSpecificData = async () => {
            const response = await fetch(`/api/${type}/${params?.id}`);
            const data = await response.json();

            { type === "address" && (setIsAddress(true)) };

            setSpecificData(data);
        };

        { params?.id && fetchSpecificData() };
    }, [params.id])

    const handleEditClick = () => {
        router.push(`/update-${type}/?id=${params?.id}`);
    }

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    }

    return (
        session?.user?.role === "admin" ? (
            <DisplaySpecificData
                type={type}
                data={specificData}
                isAddress={isAddress}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        ) : (
            <div className="forms_section">
                <h1 className="access">Access Denied</h1>
                <div className="permissions">You don't have the permissions</div>
            </div>
        )
    )
}

export default ViewSpecificData
