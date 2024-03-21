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
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    const [offers, setOffers] = useState([]);

    const fetchOffers = async () => {
        const response = await fetch('/api/offer');
        const data = await response.json();

        setOffers(data);
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    const filterOffers = (searchText) => {
        const regex = new RegExp(searchText, "i");
        return offers.filter((offer) => regex.test(offer.name) || regex.test(offer.address && offer.address.city) || regex.test(offer.address && offer.address.country) || regex.test(offer.clinic && offer.clinic.name) || regex.test(offer.clinic && offer.clinic.specialisation) || regex.test(offer.hotel && offer.hotel.name) || regex.test(offer.destination && offer.destination.name));
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchedResult = filterOffers(e.target.value);
                setSearchedResults(searchedResult);
            }, 500)
        );
    };

    return (
        <section>
            <form className="max-w-md mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div>
                    <input
                        type="text"
                        placeholder="Search for address, clinic name, clinic specialisation and other..."
                        value={searchText}
                        onChange={handleSearchChange}
                        required
                        className="block w-full mt-5 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
            </form>

            {searchText ? (
                <OfferCardDisplay
                    data={searchedResults}
                />
            ) : (
                <OfferCardDisplay
                    data={offers}
                />
            )}
        </section>
    )
}

export default Feed
