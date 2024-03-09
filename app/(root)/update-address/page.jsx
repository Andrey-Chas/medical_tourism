'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import FormAddress from '@/components/FormAddress';

const UpdateAddress = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const addressId = searchParams.get("id");
  const [address, setAddress] = useState({
    city: '',
    country: ''
  });

  useEffect(() => {
    const getAddress = async () => {
        const response = await fetch(`/api/address/${addressId}`);
        const data = await response.json();

        setAddress({
            city: data.city,
            country: data.country,
        })
    }

    {addressId && getAddress()}
  }, [addressId])

  const updateAddress = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!addressId) return console.log("Address not found");

    try {
      const response = await fetch(`/api/address/${addressId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          city: address.city.trim(),
          country: address.country.trim()
        })
      })

      if (response.ok) {
        console.log("Successfully updated");
        router.push("/display/address")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FormAddress
      type="Edit"
      address={address}
      setAddress={setAddress}
      submitting={submitting}
      handleSubmit={updateAddress}
    />
  )
}

export default UpdateAddress
