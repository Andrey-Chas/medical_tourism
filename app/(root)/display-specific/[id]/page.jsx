'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import DisplaySpecificData from "@/components/DisplaySpecificData";

const ViewSpecificData = ({ params }) => {
    const [specificData, setSpecificData] = useState([]);
    const [isAddress, setIsAddress] = useState(false);
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

    return (
        <DisplaySpecificData
            type={type}
            data={specificData}
            isAddress={isAddress}
        />
    )
}

export default ViewSpecificData
