'use client';

import { useState, useEffect } from 'react';

import DisplayData from "@/components/DisplayData";

const ViewData = ({ params }) => {
    const [data, setData] = useState([]);
    const [isAddress, setIsAddress] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/${params?.data}`);
            const data = await response.json();

            { params.data === "address" && (setIsAddress(true)) };

            setData(data);
        };

        { params?.data && fetchData() };
    }, [params.data])

    return (
        <DisplayData
            type={params.data}
            data={data}
            isAddress={isAddress}
        />
    )
}

export default ViewData
