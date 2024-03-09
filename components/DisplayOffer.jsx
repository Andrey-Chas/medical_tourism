const DisplayOffer = ({ data }) => {
    return (
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
                        key !== "name" && key !== "_id" && key !== "description" && key !== "rating" && key !== "__v" && (
                            <tr key={key}>
                                <td scope="row" colSpan={key === "destination" && 2} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                        <td scope="row" colSpan={key === "hotel" && 2} className="px-6 py-4 font-medium text-gray-900 dark:text-white">
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
    )
}

export default DisplayOffer
