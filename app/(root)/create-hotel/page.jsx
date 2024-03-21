'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import FormHotel from '@/components/FormHotel';

const CreateHotel = () => {
  const { data: session } = useSession();
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
          name: hotel.name.trim(),
          addressId: hotel.address.trim(),
          url: hotel.url.trim(),
          phone_number: hotel.phone_number.trim()
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
    session?.user?.role === "admin" ? (
      <FormHotel
        type="Create"
        hotel={hotel}
        setHotel={setHotel}
        successMessage={successMessage}
        submitting={submitting}
        handleSubmit={createHotel}
      />
    ) : (
      <div className="forms_section">
        <h1 className="access">Access Denied</h1>
        <div className="permissions">You don't have the permissions</div>
      </div>
    )
  )
}

export default CreateHotel
