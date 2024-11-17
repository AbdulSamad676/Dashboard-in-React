// import { faFile } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import LoansCard from '../components/LoanCard';
// import Modal from '../components/Modal';
// import UniCard from '../components/UniCard';

// function Dashboard() {
//   // const textColor = 'text-blue-700';
//   const [openModal, setOpenModal] = useState(false);
//   const reduxData = useSelector((state) => state.uniData);

//   console.log('data from redux', reduxData[0].labelBg);
//   const bgType = reduxData[0].labelBg;
//   console.log('✅ typeof(bgType)    ', typeof bgType);

//   function closeModal() {
//     setOpenModal(false);
//   }

//   const loanData = [
//     {
//       loanStatus: 'Total Loan',
//       loanCurrency: 'ZMK',
//       payment: '10000',
//       textColor: 'text-violet-700',
//     },
//     {
//       loanStatus: 'Paid',
//       loanCurrency: 'ZMK',
//       payment: '3000',
//       textColor: 'text-green-500',
//     },
//   ];

//   const uniData = [
//     {
//       cardLabel: 'Student Loan',
//       labelBg: 'bg-orange-300',
//       cardBorder: ' border-l-8 border-amber-500',
//       date: '07/01/2021',
//       name: 'Mukuba University',
//     },
//     {
//       cardLabel: 'Schelorship',
//       labelBg: 'bg-red-300',
//       cardBorder: 'border-l-8 border-red-500',
//       date: '09/07/2021',
//       name: 'China Schelorship',
//     },
//     {
//       cardLabel: 'Student Loan',
//       labelBg: 'bg-blue-300',
//       cardBorder: 'border-l-8 border-blue-500',
//       date: '10/12/2021',
//       name: 'University of Zambia',
//     },
//   ];

//   return (
//     <div className='w-11/12 mx-auto mt-10 bg-blue-100  rounded-lg p-2'>
//       <div className='loans-row my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full sm:w-10/12 box-border '>
//         {loanData?.map((item) => {
//           return <LoansCard key={item.key} data={item} />;
//         })}
//         {/* <LoansCard textColor={textColor} />
// 				<LoansCard /> */}
//       </div>
//       <div className='label-row mt-16 mb-5 flex flex-wrap justify-between'>
//         <div className='flex items-center justify-center sm:justify-start w-full sm:w-6/12 md:w-4/12 py-2'>
//           <p className='uppercase text-sm primary p-0 m-0 '>
//             Loan & Scholership
//           </p>
//         </div>
//         <div className='flex items-center justify-center secondary-bg drop-shadow-lg w-full sm:w-6/12 md:w-4/12 p-2'>
//           <FontAwesomeIcon className='primary mr-3' icon={faFile} />
//           <p className='p-0 m-0 text-sm'> Download Statment</p>
//         </div>
//       </div>
//       <div className='my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full md:w-11/12 sm:w-12/12 box-border '>
//         {reduxData?.map((item) => {
//           return <UniCard key={item.key} data={item} />;
//         })}

//         {/* <LoansCard textColor={textColor} />
// 				<LoansCard /> */}
//       </div>
//       <button
//         onClick={() => setOpenModal(true)}
//         className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600
//          hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//       >
//         add University
//       </button>
//       {openModal && <Modal closeModal={closeModal} />}
//     </div>
//   );
// }

// export default Dashboard;


import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoansCard from "../components/LoanCard";
import Modal from "../components/Modal";
import UniCard from "../components/UniCard";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const reduxData = useSelector((state) => state.universities.uniData); // Adjust path to match your slice structure

  console.log("data from redux", reduxData);

  // Validate data before accessing
  const bgType = reduxData.length > 0 ? reduxData[0].labelBg : "default-bg";

  console.log("✅ typeof(bgType)    ", typeof bgType);

  function closeModal() {
    setOpenModal(false);
  }

  const loanData = [
    {
      loanStatus: "Total Loan",
      loanCurrency: "ZMK",
      payment: "10000",
      textColor: "text-violet-700",
    },
    {
      loanStatus: "Paid",
      loanCurrency: "ZMK",
      payment: "3000",
      textColor: "text-green-500",
    },
  ];

  return (
    <div className="w-12/12  m-5 bg-blue-100 dark:bg-gray-900 rounded-lg py-2 pb-5 px-5">
      <div className="loans-row my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full sm:w-10/12 box-border ">
        {loanData.map((item, index) => (
          <LoansCard key={index} data={item} />
        ))}
      </div>
      <div className="label-row mt-16 mb-5 flex flex-wrap justify-between">
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-6/12 md:w-4/12 py-2">
          <p className="uppercase text-sm text-[#4953cf] p-0 m-0 dark:text-white">
            Loan & Scholership
          </p>
        </div>
        <div className="flex items-center justify-center secondary-bg dark:bg-gray-800 drop-shadow-lg w-full sm:w-6/12 md:w-4/12 p-2">
          <FontAwesomeIcon className=" mr-3 text-[#4953cf] dark:text-white" icon={faFile} />
          <p className="p-0 m-0 text-sm dark:text-white"> Download Statement</p>
        </div>
      </div>
      <div className="my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 sm:gap-y-0 sm:gap-x-5 w-full md:w-11/12 sm:w-12/12 box-border ">
        {reduxData.length > 0 ? (
          reduxData.map((item) => (
            <UniCard key={item.id} data={item} />
          ))
        ) : (
          <p>No universities available. Add one using the button below.</p>
        )}
      </div>
      <button
        onClick={() => setOpenModal(true)}
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
      >
        Add University
      </button>
      {openModal && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Dashboard;
