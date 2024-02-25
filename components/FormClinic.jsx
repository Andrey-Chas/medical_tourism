import Select from '@/components/Select';
import Link from 'next/link';
import Image from 'next/image';

const FormClinic = ({ type, clinic, setClinic, successMessage, submitting, handleSubmit }) => {
    return (
        <section className="forms_section">
            <h1 className="forms_name">
                {type} Clinic
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mt-10"
            >
                <label className="forms_label">Name:</label>
                <input
                    value={clinic.name}
                    onChange={(e) => setClinic({ ...clinic, name: e.target.value })}
                    placeholder="Name of the clinic..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Specialisation:</label>
                <input
                    value={clinic.specialisation}
                    onChange={(e) => setClinic({ ...clinic, specialisation: e.target.value })}
                    placeholder="Name of the specialisation..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Address:</label>
                <Select
                    type='address'
                    handleOnChangeAddress={(e) => setClinic({ ...clinic, address: e.target.value })}
                />
                <br />
                <label className="forms_label">Url:</label>
                <input
                    value={clinic.url}
                    type='url'
                    onChange={(e) => setClinic({ ...clinic, url: e.target.value })}
                    placeholder="Url..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Phone Number:</label>
                <input
                    value={clinic.phone_number}
                    type="tel"
                    onChange={(e) => setClinic({ ...clinic, phone_number: e.target.value })}
                    placeholder="Phone number..."
                    required
                    className="input_field"
                />
                <br />

                <div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="create_btn"
                    >
                        {submitting ? "Working" : type}
                    </button>
                    <Link href="/" className="cancel_btn ml-5">
                        Cancel
                    </Link>
                    {successMessage ? (
                        <span className="ml-10 text-green-500">
                            Created!
                            <Link href="/display/clinic" className="view_btn">
                                <Image
                                    src="/assets/icons/view.svg"
                                    alt="View Icon"
                                    width={20}
                                    height={20}
                                />
                                View
                            </Link>
                        </span>
                    ) : (
                        null
                    )}
                </div>
            </form>
        </section>
    )
}

export default FormClinic
