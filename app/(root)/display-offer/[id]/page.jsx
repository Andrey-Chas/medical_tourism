'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import DisplayOffer from '@/components/DisplayOffer';

const ViewOffer = ({ params }) => {
    const [offer, setOffer] = useState([]);
    const router = useRouter();
    
    useEffect(() => {
        const fetchOffer = async () => {
            const response = await fetch(`/api/offer/${params?.id}`);
            const data = await response.json();

            setOffer(data);
        };

        { params?.id && fetchOffer() };
    }, [params.id])

    return (
        <DisplayOffer
            data={offer}
        />
    )
}

export default ViewOffer
