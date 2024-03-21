'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react'

import FormDestination from '@/components/FormDestination';

const CreateDestination = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [destination, setDestination] = useState({
    name: '',
    address: ''
  });

  const createDestination = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/destination/new', {
        method: 'POST',
        body: JSON.stringify({
          name: destination.name.trim(),
          addressId: destination.address.trim()
        })
      })

      if (response.ok) {
        console.log("Successfully added to the database");
        setDestination({ ...destination, name: '' });
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
    session?.user?.role === "admin" ? (
      <FormDestination
        type="Create"
        destination={destination}
        setDestination={setDestination}
        successMessage={successMessage}
        submitting={submitting}
        handleSubmit={createDestination}
      />
    ) : (
      <div className="forms_section">
        <h1 className="access">Access Denied</h1>
        <div className="permissions">You don't have the permissions</div>
      </div>
    )
  )
}

export default CreateDestination
