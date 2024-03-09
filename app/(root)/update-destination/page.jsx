'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import FormDestination from '@/components/FormDestination';

const UpdateDestination = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const destinationId = searchParams.get("id");
  const [destination, setDestination] = useState({
    name: '',
    address: '',
  });

  useEffect(() => {
    const getDestination = async () => {
        const response = await fetch(`/api/destination/${destinationId}`);
        const data = await response.json();

        setDestination({
            name: data.name,
            address: data.address,
        })
    }

    {destinationId && getDestination()}
  }, [destinationId])

  const updateDestination = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!destinationId) return console.log("Destination not found");

    try {
      const response = await fetch(`/api/destination/${destinationId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: destination.name.trim(),
          addressId: destination.address.trim()
        })
      })

      if (response.ok) {
        console.log("Successfully updated");
        router.push("/display/destination")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FormDestination
      type="Edit"
      destination={destination}
      setDestination={setDestination}
      submitting={submitting}
      handleSubmit={updateDestination}
    />
  )
}

export default UpdateDestination
