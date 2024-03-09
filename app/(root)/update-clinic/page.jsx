'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import FormClinic from '@/components/FormClinic';

const UpdateClinic = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const clinicId = searchParams.get("id");
  const [clinic, setClinic] = useState({
    name: '',
    specialisation: '',
    address: '',
    url: '',
    phone_number: ''
  });

  useEffect(() => {
    const getClinic = async () => {
        const response = await fetch(`/api/clinic/${clinicId}`);
        const data = await response.json();

        setClinic({
            name: data.name,
            specialisation: data.specialisation,
            address: data.address,
            url: data.url,
            phone_number: data.phone_number
        })
    }

    {clinicId && getClinic()}
  }, [clinicId])

  const updateClinic = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if(!clinicId) return console.log("Clinic not found");

    try {
      const response = await fetch(`/api/clinic/${clinicId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: clinic.name.trim(),
          specialisation: clinic.specialisation.trim(),
          addressId: clinic.address.trim(),
          url: clinic.url.trim(),
          phone_number: clinic.phone_number.toString().trim()
        })
      })

      if (response.ok) {
        console.log("Successfully updated");
        router.push("/display/clinic")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <FormClinic
      type="Edit"
      clinic={clinic}
      setClinic={setClinic}
      submitting={submitting}
      handleSubmit={updateClinic}
    />
  )
}

export default UpdateClinic
