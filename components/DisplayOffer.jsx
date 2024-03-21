import Link from 'next/link';

const DisplayOffer = ({ data, session, comments, setComment, handlePostCommentClick }) => {
    return (
        <>
            <section className="table_section_offer overflow-x-hidden shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left">
                    <caption className="forms_name">
                        {data.name}
                    </caption>
                    <thead className="uppercase">
                        <tr>
                            <th scope="col" className="px-6 py-3 sr-only">
                                Data
                            </th>
                            <th scope="col" className="px-6 py-3 sr-only">
                                Specialisation
                            </th>
                            <th scope="col" className="px-6 py-3 sr-only">
                                URL and Additional Data
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([key, value]) => (
                            key !== "name" && key !== "_id" && key !== "description" && key !== "comment" && key !== "rating" && key !== "__v" && (
                                <tr key={key}>
                                    <td scope="row" colSpan={key === "destination" ? 2 : undefined} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <label className="offer_label">{key[0].toUpperCase() + key.slice(1)}{key === "clinic" || key === "hotel" || key === "destination" ? " name:" : ":"}</label>
                                        <div>{key === "address" ? value.country + ", " + value.city : value.name}</div>
                                    </td>
                                    {
                                        key === "clinic" && (
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                <label className="offer_label">Specialisation:</label>
                                                <div>{value.specialisation}</div>
                                            </td>
                                        )
                                    }
                                    {
                                        (key === "clinic" || key === "hotel") && (
                                            <td scope="row" colSpan={key === "hotel" ? 2 : undefined} className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                <label className="offer_label">Contact information:</label>
                                                <div>{value.url}, {value.phone_number}</div>
                                            </td>
                                        )
                                    }
                                </tr>
                            )
                        ))}
                        <tr>
                            <td scope="row" colSpan={3} className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                <label className="offer_label">Description:</label>
                                <div className="mt-3 font-normal text-gray-700 dark:text-white">{data.description}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="bg-white dark:bg-gray-900 antialiased">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments ({comments.length})</h2>
                    </div>
                    {
                        session?.user ? (
                            <form onSubmit={handlePostCommentClick} className="mb-6">
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label className="sr-only">Your comment</label>
                                    <textarea
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Your comment..."
                                        required
                                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                    />
                                </div>
                                <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Post Comment
                                </button>
                            </form>
                        ) : (
                            <div className="text-center m-5">
                                You have to be loged in in order to leave a comment. {" "}
                                <Link
                                    href="/login"
                                    className="text-blue-700 underline"
                                >
                                    Log in?
                                </Link>
                            </div>
                        )
                    }
                    {
                        comments.map(comment => (
                            <article key={comment} className={`p-6 mb-3 text-base bg-white ${comments.indexOf(comment) !== 0 && "border-t border-gray-200"} dark:border-gray-700 dark:bg-gray-900`}>
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                                            Thoughts
                                        </p>
                                    </div>
                                </footer>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {comment}
                                </p>
                            </article>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default DisplayOffer
