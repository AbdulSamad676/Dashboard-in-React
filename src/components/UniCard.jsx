import { faCircleInfo, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function UniCard({ data }) {
  const { cardLabel, labelBg, cardBorder, date, name } = data;

  console.log('card data', data);

  return (
    <div
      className={`rounded  my-5 py-3 secondary-bg drop-shadow-lg box-border ${cardBorder}`}
    >
      <div className='flex flex-wrap items-center justify-center sm:justify-between px-3'>
        <p
          className={`text-xs m-0 rounded-lg py-1 px-2 text-center ${labelBg}`}
        >
          {cardLabel}
        </p>
        <p className='m-0 text-xs  text-red-700 font-semibold'>
          <span className='px-2 text-gray-500 '>Closes:</span> {date}
        </p>
      </div>
      <h1 className='my-3 text-xl text-center font-semibold uppercase'>
        {name}
      </h1>
      <div className='flex justify-between items-center mx-3'>
        <FontAwesomeIcon className='primary text-xl' icon={faCircleInfo} />
        <button className='bg-primary text-xs px-5 py-1 text-white font-semibold rounded'>
          Apply
        </button>
      </div>
    </div>
  );
}

export default UniCard;
