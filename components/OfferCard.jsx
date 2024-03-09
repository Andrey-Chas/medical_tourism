'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const OfferCard = ({ offer }) => {
    const router = useRouter();

    const handleOfferClick = () => {
        router.push(`/display-offer/${offer._id}`);
    }

    return (
        offer.clinic && offer.hotel && offer.address && offer.destination && (
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer" onClick={handleOfferClick}>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{offer.name}</h5>
                    <ul>
                        <label className="offer_label">Clinic name:</label>
                        <li>{offer.clinic.name}</li>
                        <label className="offer_label">Specialisation:</label>
                        <li>{offer.clinic.specialisation}</li>
                        <label className="offer_label">Hotel name:</label>
                        <li>{offer.hotel.name}</li>
                        <label className="offer_label">Address:</label>
                        <li>{offer.address.country}, {offer.address.city}</li>
                        <label className="offer_label">Destination:</label>
                        <li>{offer.destination.name}</li>
                        <li className="mt-3 font-normal text-gray-700 dark:text-gray-400">{offer.description}</li>
                    </ul>
                </div>
            </div>
        )
    )
}

export default OfferCard
