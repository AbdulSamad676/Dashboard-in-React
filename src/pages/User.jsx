import React from "react";
import profileImg from "../assets/images/profile.png";
function User() {
  return (
    <div className="w-11/12 mx-auto mt-10 rounded-lg p-2">
      <div className="profile-row grid grid-cols-12 md:grid-cols-11 my-5 gap-x-5">
        <div className="w-auto flex jusitfy-center flex-col gap-3 items-center profile col-span-12 md:col-span-3 py-4 box-border secondary-bg dark:bg-gray-900 drop-shadow-lg rounded">
          <div className="profileImg">
            <img
              className="w-20 md:w-32 h-20 md:h-32"
              src={profileImg}
              alt=""
            />
          </div>
          <button
            className=" w-max p-2 md:px-5 md:uppercase py-1 w-auto text-xs border
           border-blue-600 dark:border-white   rounded hover:bg-blue-600 hover:text-white dark:text-white"
          >
            Change Profile Photo
          </button>
          <p className=" text-xs text-center dark:text-white">
            Registration Date: <span className="font-bold ">20 June,2020</span>
          </p>
        </div>
        <div className="profile col-span-12 md:col-span-7 secondary-bg dark:bg-gray-900 dark:text-white px-2 drop-shadow-lg rounded p-4">
          <div className="dataHeader flex justify-between px-3 mb-5">
            <p>Personal Information</p>
            <button className="px-5 uppercase py-1 w-auto text-xs border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
              Edit
            </button>
          </div>
          <div className="personal-details grid grid-cols-2 md:grid-cols-3 px-3 gap-5">
            <div className="data-item">
              <p className="text-xs text-gray-400">Name</p>
              <p className="text-sm ">Abdul Samad Khan</p>
            </div>
            <div className="data-item">
              <p className="text-xs text-gray-400">University Name</p>
              <p className="text-sm ">University of Zambia</p>
            </div>
            <div className="data-item">
              <p className="text-xs text-gray-400">Program of Study</p>
              <p className="text-sm ">Bachelor's Student</p>
            </div>
            <div className="data-item">
              <p className="text-xs text-gray-400">Phone Number</p>
              <p className="text-sm ">+92 336 0097 019</p>
            </div>
            <div className="data-item">
              <p className="text-xs text-gray-400">Parent's/Guardian</p>
              <p className="text-sm ">Sabz Ali Khan</p>
            </div>
            <div className="data-item">
              <p className="text-xs text-gray-400">Nationality</p>
              <p className="text-sm ">Pakistani</p>
            </div>
            <div className="data-item">
              <p className="text-xs text-gray-400">Address</p>
              <p className="text-sm ">Bannu, KPK Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
