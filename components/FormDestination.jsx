import Select from '@/components/Select';
import Link from 'next/link';
import Image from 'next/image';

const FormDestination = ({ type, destination, setDestination, successMessage, submitting, handleSubmit }) => {
    return (
        <section className="forms_section">
            <h1 className="forms_name">
                {type} Destination
            </h1>

            <form
                onSubmit={handleSubmit}
                className="mt-10"
            >
                <label className="forms_label">Name:</label>
                <input
                    value={destination.name}
                    onChange={(e) => setDestination({ ...destination, name: e.target.value })}
                    placeholder="Name of the destination..."
                    required
                    className="input_field"
                />
                <br />
                <label className="forms_label">Address:</label>
                <Select
                    data={destination}
                    setData={setDestination}
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
                            <Link href="/" className="view_btn">
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

export default FormDestination
