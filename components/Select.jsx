'use client'

import { useState, useEffect } from 'react';

const Select = ({ type, addressValue, handleOnChangeAddress }) => {
    const [allData, setAllData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`/api/${type}`);
        const data = await response.json();
        
        const filteredData = type !== "address" && data.filter(valueData => 
            valueData.address._id === addressValue);
        
        {type !== "address" ? (
            setAllData(filteredData)
        ) : (
            setAllData(data)
        )}
    };

    useEffect(() => {
        fetchData();
    }, [addressValue]);

    return (
        <select className="select" required onChange={handleOnChangeAddress}>
            <option key="defaultValue" defaultValue="">Choose {type}</option>
            {allData.map((valueData) => (
                <option key={valueData._id} value={valueData._id}>{type !== "address" ? valueData.name : valueData.country + ", " + valueData.city}</option>
            ))}
        </select>
    )
}

export default Select
