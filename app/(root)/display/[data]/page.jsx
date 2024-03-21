'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import DisplayData from "@/components/DisplayData";

const ViewData = ({ params }) => {
    const { data: session } = useSession();
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
        session?.user?.role === "admin" ? (
            <DisplayData
                type={params.data}
                data={data}
                isAddress={isAddress}
                setData={setData}
            />
        ) : (
            <div className="forms_section">
                <h1 className="access">Access Denied</h1>
                <div className='permissions'>You don't have the permissions</div>
            </div>
        )
    )
}

export default ViewData
