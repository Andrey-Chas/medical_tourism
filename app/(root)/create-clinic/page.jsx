'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import FormClinic from '@/components/FormClinic';

const CreateClinic = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [clinic, setClinic] = useState({
    name: '',
    specialisation: '',
    address: '',
    url: '',
    phone_number: ''
  });

  const createClinic = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/clinic/new', {
        method: 'POST',
        body: JSON.stringify({
          name: clinic.name.trim(),
          specialisation: clinic.specialisation.trim(),
          addressId: clinic.address.trim(),
          url: clinic.url.trim(),
          phone_number: clinic.phone_number.trim()
        })
      })

      if (response.ok) {
        console.log("Successfully added to the database");
        setClinic({ ...clinic, name: '', specialisation: '', url: '', phone_number: '' });
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
      <FormClinic
        type="Create"
        clinic={clinic}
        setClinic={setClinic}
        successMessage={successMessage}
        submitting={submitting}
        handleSubmit={createClinic}
      />
    ) : (
      <div className="forms_section">
        <h1 className="access">Access Denied</h1>
        <div className="permissions">You don't have the permissions</div>
      </div>
    )
  )
}

export default CreateClinic
