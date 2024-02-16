'use client';

import { useState } from 'react';

import FormAddress from '@/components/FormAddress';

const CreateAddress = () => {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [address, setAddress] = useState({
    city: '',
    country: ''
  });

  const createAddress = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/address/new', {
        method: 'POST',
        body: JSON.stringify({
          city: address.city.trim(),
          country: address.country.trim()
        })
      })

      if (response.ok) {
        console.log("Successfully added to the database");
        setAddress({ ...address, city: '', country: '' });
        setSuccessMessage(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      setTimeout(() => setSuccessMessage(false), 5000);
    }
  }

  return (
    <FormAddress
      type="Create"
      address={address}
      setAddress={setAddress}
      successMessage={successMessage}
      submitting={submitting}
      handleSubmit={createAddress}
    />
  )
}

export default CreateAddress
