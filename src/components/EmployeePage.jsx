import { useNavigate } from 'react-router-dom';

export default function EmployeePage() {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='flex  gap-4 '>
                <button
                    type='button'
                    onClick={() => navigate('/leave-request')}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                    Submit Leave Request
                </button>
                <button
                    type='button'
                    onClick={()=>navigate('/leave-requests-list')}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                    My Rquests
                </button>
                <button
                    type='button'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                    Dashboard
                </button>
            </div>
        </div>
    );
}
