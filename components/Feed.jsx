'use client'

import { useState, useEffect } from 'react';

import OfferCard from './OfferCard';

const OfferCardDisplay = ({ data }) => {
    return (
        <div className="grid-cols-1 gap-3 m-10 sm:grid md:grid-cols-3">
            {data.map((offer) => (
                <OfferCard
                    key={offer._id}
                    offer={offer}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [offers, setOffers] = useState([]);

    const fetchOffers = async () => {
        const response = await fetch('/api/offer');
        const data = await response.json();

        setOffers(data);
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    return (
        <section>
            <OfferCardDisplay data={offers} />
        </section>
    )
}

export default Feed
