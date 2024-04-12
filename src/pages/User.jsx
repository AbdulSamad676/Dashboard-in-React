import React from 'react';

function User() {
  return (
    <div className='w-11/12 mx-auto mt-10 rounded-lg p-2'>
      <div className='title-row'>
        <h2 className='text-2xl font-semibold'>User Profile</h2>
      </div>
      <div className='profile-row grid grid-cols-12 my-5 gap-x-5'>
        <div className='profile col-span-3 border border-black p-4'>
          profile
        </div>
        <div className='profile col-span-7 border border-black p-4'>
          profile Data
        </div>
      </div>
    </div>
  );
}

export default User;
