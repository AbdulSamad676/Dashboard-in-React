import {
  faCircleLeft,
  faCircleQuestion,
  faMessage,
  faTableCellsLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import IMG from "../assets/images/profile.png";
function Sidebar() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <div className="mb-5">
        <h1 className="hidden sm:block text-3xl text-white font-bold">HELSB</h1>
      </div>
      <div className=" hidden sm:flex flex-col items-center justify-center mb-5 mt-5">
        <img src={IMG} alt="" width={100} />
        <h2 className="text-sm font-semibold my-2 hidden md:block">
          Abdul Samad Khan
        </h2>
      </div>
      <div
        className="flex flex-col w-full
			 gap-3 mb-10"
      >
        <Link to="/dashboard">
          <div className="icons p-2 ">
            <FontAwesomeIcon
              className="text-xl lg:text-lg"
              icon={faTableCellsLarge}
            />
            <p className="text-xs hidden lg:block  font-normal">Dashboard</p>
          </div>
        </Link>
        <Link to="/chat">
          <div className="icons p-2">
            <FontAwesomeIcon className="text-xl lg:text-lg" icon={faMessage} />
            <p className="text-xs hidden lg:block  font-normal">Chat</p>
          </div>
        </Link>
        <Link to="/user">
          <div className="icons p-2 hover:bg-[#4953cf]">
            <FontAwesomeIcon className="text-xl lg:text-lg" icon={faUser} />
            <p className="text-xs hidden lg:block  font-normal">User</p>
          </div>
        </Link>
        <Link to="/help">
          <div className="icons p-2">
            <FontAwesomeIcon
              className="text-xl lg:text-lg"
              icon={faCircleQuestion}
            />
            <p className="text-xs hidden lg:block  font-normal">Help</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-3 cursor-pointer">
        <FontAwesomeIcon className="text-3xl" icon={faCircleLeft} />
        <p className="text-xs hidden lg:block  font-thin">Log Out</p>
      </div>
    </div>
  );
}

export default Sidebar;
