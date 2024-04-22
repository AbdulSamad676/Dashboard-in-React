import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import addUniversity from '../store/Slices/UniversitiesSlice/UniversitiesSlice';

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    cardLabel: 'Student Loan',
    labelBg: 'bg-orange-300',
    cardBorder: 'border-l-8 border-amber-500',
    date: '07/01/2021',
    name: 'Mukuba University',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('form date', formData);
  //     // Handle form submission here, e.g., send data to backend or perform any desired action
  //     closeModal();
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataObject = {
      cardLabel: formData.cardLabel,
      labelBg: formData.labelBg,
      cardBorder: formData.cardBorder,
      date: formData.date,
      name: formData.name,
    };
    dispatch(addUniversity(formDataObject)); // Dispatch the action with the form data object
    console.log('user data sent', formDataObject);
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
                className='mt-1 block w-full border-gray-300 p-1 
                border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Label Background (must be tailwind css Classes)
              </label>
              <input
                type='text'
                name='labelBg'
                value={formData.labelBg}
                onChange={handleChange}
                className='mt-1 block w-full border-gray-300 p-1 
                border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Card Border (must be tailwind css Classes)
              </label>
              <input
                type='text'
                name='cardBorder'
                value={formData.cardBorder}
                onChange={handleChange}
                className='mt-1 block w-full border-gray-300 p-1 
                border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Closing Date
              </label>
              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                className='mt-1 block w-full border-gray-300 p-1 
                border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                University Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='mt-1 block w-full border-gray-300 p-1 
                border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            {/* Add other form fields here */}
            <div className='flex justify-end'>
              <button
                type='submit'
                className='inline-flex justify-center px-4 py-2 text-sm font-medium 
                text-white bg-indigo-600 hover:bg-indigo-700 
                rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
