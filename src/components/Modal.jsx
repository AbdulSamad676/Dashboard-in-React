import React from 'react';
import { useState } from 'react';

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    cardLabel: 'Student Loan',
    labelBg: 'bg-orange-300',
    cardBorder: 'border-l-8 border-amber-500',
    date: '07/01/2021',
    name: 'Mukuba University',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or perform any desired action
    closeModal();
  };

  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen px-4'>
        <div className='bg-white rounded-lg p-6 shadow-xl max-w-md w-full'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Card Label
              </label>
              <input
                type='text'
                name='cardLabel'
                value={formData.cardLabel}
                onChange={handleChange}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            {/* Add other form fields here */}
            <div className='flex justify-end'>
              <button
                type='submit'
                className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
