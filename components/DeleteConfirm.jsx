import Image from 'next/image';
import { useRouter } from 'next/navigation';

const DeleteConfirm = ({ type, isModalOpen, data, setData, dataValue, setIsModalOpen, isRouter }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await fetch(`/api/${type}/${dataValue._id.toString()}`, {
                method: 'DELETE'
            })
            setIsModalOpen(false);

            const filteredValues = !isRouter && data.filter((value) => value._id !== dataValue._id);

            {!isRouter && setData(filteredValues)};

            {isRouter && router.push(`/display/${type}`)};
        } catch (error) {
            console.log(error);
        }
    }

    return (
        isModalOpen && (
            <div tabIndex="-1" className="max-w-sm mx-auto my-56 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" type="button" onClick={() => setIsModalOpen(false)}>
                            <Image
                                src="/assets/icons/close.svg"
                                alt="Close button"
                                width={15}
                                height={15}
                            />
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <Image
                                src="/assets/icons/delete.svg"
                                alt="Delete icon"
                                width={35}
                                height={35}
                                className="mx-auto mb-4 text-gary-400 w-12 h-12 dark:text-gray-200"
                            />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this?</h3>
                            <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" type="button" onClick={handleDelete}>
                                Yes, I'm sure
                            </button>
                            <button className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button" onClick={() => setIsModalOpen(false)}>
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default DeleteConfirm
