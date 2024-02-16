'use client'

import { useState, useEffect } from 'react';

const Select = ({ data, setData }) => {
    const [allAddresses, setAllAddresses] = useState([]);

    const fetchAddresses = async () => {
        const response = await fetch('/api/address');
        const data = await response.json();

        setAllAddresses(data);
    };

    useEffect(() => {
        fetchAddresses();
    }, []);

    return (
        <select className="select" required onChange={(e) => setData({ ...data,  address: e.target.value })}>
            <option key="defaultValue" defaultValue="">Choose a country</option>
            {allAddresses.map((address) => (
                <option key={address._id} value={address._id}>{address.country}, {address.city}</option>
            ))}
        </select>
    )
}

export default Select
