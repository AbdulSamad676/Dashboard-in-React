import React from 'react';
import profileImg from '../assets/images/profile.png';
function User() {
  return (
    <div className='w-11/12 mx-auto mt-10 rounded-lg p-2'>
      <div className='title-row'>
        <h2 className='text-2xl font-semibold'>User Profile</h2>
      </div>
      <div className='profile-row grid grid-cols-11 my-5 gap-x-5'>
        <div className='w-auto flex jusitfy-center flex-col gap-3 items-center profile col-span-3 py-4 box-border secondary-bg drop-shadow-lg rounded'>
          <div className='profileImg'>
            <img src={profileImg} width={150} height={150} alt='' />
          </div>
          <button className='px-5 uppercase py-1 w-auto text-xs border border-blue-600 rounded hover:bg-blue-600 hover:text-white'>
            Change Profile Photo
          </button>
          <p className=' text-xs'>
            Registration Date: <span className='font-bold'>20 June,2020</span>
          </p>
        </div>
        <div className='profile col-span-7 secondary-bg px-2 drop-shadow-lg rounded'>
          profile Data
        </div>
      </div>
    </div>
  );
}

export default User;
