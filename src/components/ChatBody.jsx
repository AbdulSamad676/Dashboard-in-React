import {
  faEllipsis,
  faFaceSmile,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Img1 from '../assets/images/single1.png';
function ChatBody({ data }) {
  //   console.log('✅ msgsArray in chat body    ', data);
  const { profileImg, name, textArray } = data;
  return (
    <>
      {/* conversation Header Start */}

      <div
        className={` conversation-header flex justify-between items-center  p-1 sm:py-1 sm:px-2 mx-1 sm:mx-0 rounded sm:w-full drop-shadow-lg secondary-bg `}
      >
        <div className="profile-section w-full flex items-center ">
          <div className="sm:mx-3">
            <img src={profileImg} width="auto" alt="chat profile" />
          </div>
          <div className=" flex flex-col justify-between w-full">
            <p className="text-md font-semibold mb-1">{name}</p>

            <p className="text-xs text-justify">
              Last Seen :{" "}
              <span className="mx-2 font-semibold text-gray-400">4:45</span>
            </p>
          </div>
        </div>
        <div className="icons-section py-2 flex justify-end  w-full pr-3 ">
          <FontAwesomeIcon
            className="text-gray-300 text-xl ml-3 hover:text-[#4953cf] cursor-pointer"
            icon={faPhone}
          />
          <FontAwesomeIcon
            className="text-gray-300 text-xl ml-3 hover:text-[#4953cf] cursor-pointer"
            icon={faVideo}
          />

          <FontAwesomeIcon
            className="text-gray-300 text-xl ml-3 hover:text-[#4953cf] cursor-pointer"
            icon={faEllipsis}
          />
        </div>
      </div>

      {/* conversation Header End */}

      {/* Chat Body Start */}

      <div className="  h-full   mt-3 px-2 py-1 overflow-auto bg-gray-100 rounded-sm">
        <p className="text-center text-sm text-gray-400">
          today <span className="font-semibold">4:45</span>{" "}
        </p>
        {textArray?.map((msg) => {
          return (
            <div
              className={`w-full ${
                msg.status === "send"
                  ? "flex justify-end"
                  : "flex justify-start"
              }`}
            >
              <div
                className={`sms w-max max-w-48  my-1 p-1 rounded ${
                  msg.status === "send"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Chat Body End */}

      {/* Chat Footer */}
      <div className="chat-footer flex justify-center items-center p-2 drop-shadow-lg secondary-bg">
        <div className=" w-full grid grid-cols-12  rounded-lg bg-gray-100 px-3 py-2">
          <div className="col-span-9 flex mx-3 items-center ">
            <FontAwesomeIcon
              className="text-sm text-gray-500"
              icon={faPaperclip}
            />

            <input
              className="text-xs text-gray-500 mx-5 w-full bg-transparent border-none outline-none focus:ring-0"
              placeholder="Type Message Here"
              type="text"
            />
          </div>
          <div className="col-span-3 flex justify-end items-center">
            <FontAwesomeIcon
              className="text-sm mx-1 text-gray-500"
              icon={faFaceSmile}
            />
            <FontAwesomeIcon
              className="text-sm mx-1 text-gray-500"
              icon={faMicrophone}
            />
            <FontAwesomeIcon
              className="text-sm mx-1 text-blue-500"
              icon={faPaperPlane}
            />
          </div>
        </div>
      </div>
      {/* Chat Footer  End*/}
    </>
  );
}

export default ChatBody;
