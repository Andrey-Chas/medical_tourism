'use client';

import { useState } from 'react';

import FormHotel from '@/components/FormHotel';

const CreateHotel= () => {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [hotel, setHotel] = useState({
    name: '',
    address: '',
    url: '',
    phone_number: ''
  });

  const createHotel = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/hotel/new', {
        method: 'POST',
        body: JSON.stringify({
          name: hotel.name,
          addressId: hotel.address,
          url: hotel.url,
          phone_number: hotel.phone_number
        })
      })

      if (response.ok) {
        console.log("Successfully added to the database");
        setHotel({ ...hotel, name: '', url: '', phone_number: '' });
        setSuccessMessage(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setTimeout(() => setSuccessMessage(false), 5000)
    }
  }

  return (
    <FormHotel
      type="Create"
      hotel={hotel}
      setHotel={setHotel}
      successMessage={successMessage}
      submitting={submitting}
      handleSubmit={createHotel}
    />
  )
}

export default CreateHotel
