import DropdownTable from "./DropdownTable";

const DisplayData = ({ type, data, isAddress }) => {
    return (
        <section className="table_section overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {isAddress ? (
                            <>
                                <th scope="col" className="px-6 py-3">
                                    Country name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City name
                                </th>
                            </>
                        ) : (
                            <>
                                <th scope="col" className="px-6 py-3">
                                    {type} Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location
                                </th>
                            </>
                        )}
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(dataValue => (
                            <tr key={dataValue._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {isAddress ? (
                                    <>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {dataValue.country}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {dataValue.city}
                                        </th>
                                    </>
                                ) : (
                                    <>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {dataValue.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {dataValue.address.country}, {dataValue.address.city}
                                        </td>
                                    </>
                                )}
                                <DropdownTable
                                    type={type}
                                    dataValue={dataValue}
                                />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default DisplayData
