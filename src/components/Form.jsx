const Form = () => {
    return (
        <>
        <h3 className="text-center text-3xl mt-4">Leave request form</h3>
        <div className="mt-5" >
            <form className='max-w-md mx-auto'>
                <div className='grid md:grid-cols-2 md:gap-6'>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            name='floating_first_name'
                            id='floating_first_name'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_first_name'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            First name
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='text'
                            name='floating_last_name'
                            id='floating_last_name'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_last_name'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Last name
                        </label>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:gap-6'>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input
                            type='tel'
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                            name='floating_phone'
                            id='floating_phone'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
                            required
                        />
                        <label
                            htmlFor='floating_phone'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Phone number (123-456-7890)
                        </label>
                    </div>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                    <input
                        type='email'
                        name='floating_email'
                        id='floating_email'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                    />
                    <label
                        htmlFor='floating_email'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                        Email address
                    </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                    <input
                        type='text'
                        name='floating_position'
                        id='floating_position'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                    />
                    <label
                        htmlFor='floating_position'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                    >
                        Position
                    </label>
                </div>

                <div className='mb-5 text-sm dark:text-gray-400'>
                    <label
                        htmlFor='typeOfLeave'
                        className='block text-sm text-gray-500'
                    >
                        Type of Leave
                    </label>
                    <select
                        id='typeOfLeave'
                        name='typeOfLeave'
                        className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
                        required
                    >
                        <option value=''>-- Select --</option>
                        <option value='AnnualLeave'>Annual Leave</option>
                        <option value='SickLeave'>Sick Leave</option>
                        <option value='MaternityLeave'>Maternity Leave</option>
                        {/* Add other types */}
                    </select>
                </div>

                <div className='mb-5 text-sm  '>
                    <label
                        htmlFor='startDate'
                        className='block   text-gray-500'
                    >
                        Start Date
                    </label>
                    <input
                        type='date'
                        id='startDate'
                        name='startDate'
                        className='mt-1 block w-full border-blue-300 rounded-md shadow-sm'
                        required
                    />
                </div>

                <div className='mb-5 text-sm'>
                    <label
                        htmlFor='endDate'
                        className='block  text-gray-500'
                    >
                        End Date
                    </label>
                    <input
                        type='date'
                        id='endDate'
                        name='endDate'
                        className='mt-1 block w-full rounded-md shadow-sm '
                        required
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='comment'
                        className='block text-sm text-gray-700'
                    >
                        Reason (optional)
                    </label>
                    <textarea
                        id='comment'
                        name='comment'
                        rows='3'
                        className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
                    ></textarea>
                </div>

                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                    Submit
                </button>
            </form>
        </div>
        </>
    );
};
export default Form;
