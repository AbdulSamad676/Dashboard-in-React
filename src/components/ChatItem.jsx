import {
  faCirclePlus,
  faEllipsis,
  faFaceSmile,
  faMagnifyingGlass,
  faMicrophone,
  faPaperclip,
  faPaperPlane,
  faPhone,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SingleChat from './SingleChat';
import Img1 from '../assets/images/single1.png';
import Img2 from '../assets/images/single2.png';
import Img3 from '../assets/images/single3.png';
import Img4 from '../assets/images/single4.png';
import Img5 from '../assets/images/single5.png';
import Img6 from '../assets/images/single6.png';
import ChatBody from './ChatBody';
import { useState } from 'react';

function ChatItem() {
  const [itemStatus, setItemStatus] = useState(false);

  // Handle button click to toggle isActive
  const handleClick = (index) => {};

  // msgs array
  const msgs = [
    {
      text: 'Hi Ahmad How are you?',
      status: 'send',
    },
    {
      text: 'Hello Jhob I am good! Whats going there?',
      status: 'receive',
    },
    {
      text: 'Hi Ahmad How are you?',
      status: 'send',
    },
    {
      text: 'Hello Jhon I am good! Whats going there?',
      status: 'send',
    },
    {
      text: 'Hi Ahmad How are you?',
      status: 'receive',
    },
    {
      text: 'Hello Jhob I am good! Whats going there?',
      status: 'receive',
    },
    {
      text: 'Hi Ahmad How are you?',
      status: 'send',
    },
    {
      text: 'Hello Jhob I am good! Whats going there?',
      status: 'receive',
    },
  ];

  const [singleItems, setSingleItems] = useState([
    {
      profileImg: Img1,
      name: 'Alex Bywalya',
      time: '4:45',
      message: 'Hello Alex',
      isActive: false,
      textArray: msgs,
    },
    {
      profileImg: Img2,
      name: 'Jay Bandy',
      time: '4:45',
      message: 'Are we Meeting today',
      isActive: false,
      textArray: msgs,
    },

    // other items omitted for brevity
  ]);

  // Handle button click to toggle isActive
  const handleButtonClick = (index) => {
    setSingleItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item,
      ),
    );
  };

  //   const singleItems = [
  //     {
  //       id: 1,
  //       profileImg: Img1,
  //       name: 'Alex Bywalya',
  //       time: '4:45',
  //       message: 'Hello Alex',
  //       isActive: itemStatus,
  //       //
  //       textArray: msgs,
  //       //
  //     },
  //     {
  //       id: 2,
  //       profileImg: Img2,
  //       name: 'Jay Bandy',
  //       time: '4:45',
  //       message: 'Are we Meeting today',

  //       isActive: itemStatus,
  //       textArray: msgs,
  //     },
  //     {
  //       id: 3,
  //       profileImg: Img3,
  //       name: 'Mike Chalo',
  //       time: '4:45',
  //       message: 'Are we Meeting today',

  //       isActive: itemStatus,
  //       textArray: msgs,
  //     },
  //     {
  //       id: 4,
  //       profileImg: Img4,
  //       name: 'Jordan Mate',
  //       time: '4:45',
  //       message: 'Are we Meeting today',

  //       isActive: itemStatus,
  //       textArray: msgs,
  //     },
  //     {
  //       id: 5,
  //       profileImg: Img5,
  //       name: 'Jani Zulu',
  //       time: '4:45',
  //       message: 'Are we Meeting today',

  //       isActive: itemStatus,
  //       textArray: msgs,
  //     },
  //     {
  //       id: 6,
  //       profileImg: Img6,
  //       name: 'Ranvi Cheelo',
  //       time: '4:45',
  //       message: 'Are we Meeting today',
  //       isActive: itemStatus,

  //       textArray: msgs,
  //     },
  //   ];

  return (
    <>
      <div className=' p-1 col-span-12  sm:col-span-5 h-auto px-3'>
        {/* Chat Items Section Start */}

        <div className='flex justify-between px-5 items-center'>
          <p>Chats</p>
          <FontAwesomeIcon className='primary text-xl' icon={faCirclePlus} />
        </div>
        <div className='flex justify-between m-5 text-sm font-thin px-3'>
          <button className='focus:text-blue-500'>Direct</button>
          <button className='focus:text-blue-500'>Departments</button>
          <button className='focus:text-blue-500'>Alerts</button>
        </div>
        <div className='flex items-center m-3 rounded-lg bg-gray-100 px-1 py-1'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-3' />
          <p className=''>Search</p>
        </div>
        <div className=' h-auto sm:h-80  overflow-auto flex sm:block px-3'>
          {singleItems.map((item, index) => (
            <button
              key={index}
              className='w-full'
              onClick={() => handleButtonClick(index)}
            >
              <SingleChat data={item} />
            </button>
          ))}
          {/* old Code */}
          {/* {singleItems?.map((item) => {
            return (
              <button
                className='w-full'
                onClick={(index) => {
                  //   setItemStatus(true);
                }}
              >
                <SingleChat key={item.key} data={item} />
              </button>
            );
          })} */}
        </div>
      </div>
      {/* Chat Items Section End */}
      {/* chat conversation */}
      <div className=' p-1 flex flex-col justify-between col-span-12 sm:col-span-7'>
        <ChatBody data={singleItems[0]} />
        {/* conversation Header Start */}

        {/* <div
					className={` conversation-header flex justify-between items-center  p-1 sm:py-1 sm:px-2 mx-1 sm:mx-0 rounded sm:w-full drop-shadow-lg secondary-bg `}
				>
					<div className='profile-section w-full flex items-center '>
						<div className='sm:mx-3'>
							<img src={Img1} width='auto' alt='chat profile' />
						</div>
						<div className=' flex flex-col justify-between w-full'>
							<p className='text-md font-semibold mb-1'>
								Alex Bawalya
							</p>

							<p className='text-xs text-justify'>
								Last Seen :{' '}
								<span className='mx-2 font-semibold text-gray-400'>
									4:45
								</span>
							</p>
						</div>
					</div>
					<div className='icons-section py-2 flex justify-end  w-full '>
						<FontAwesomeIcon
							className='text-gray-300 text-xl ml-3'
							icon={faPhone}
						/>
						<FontAwesomeIcon
							className='text-gray-300 text-xl ml-3'
							icon={faVideo}
						/>

						<FontAwesomeIcon
							className='text-gray-300 text-xl ml-3'
							icon={faEllipsis}
						/>
					</div>
				</div> */}

        {/* conversation Header End */}

        {/* Chat Body Start */}

        {/* <div className='  h-80   mt-3 px-2 py-1 overflow-auto'>
					<p className='text-center text-sm text-gray-400'>
						today <span className='font-semibold'>4:45</span>{' '}
					</p>
					{msgsArray?.map(msg => {
						return (
							<div
								className={`w-full ${
									msg.status === 'send'
										? 'flex justify-end'
										: 'flex justify-start'
								}`}
							>
								<div
									className={`sms w-max max-w-48  my-1 p-1 rounded ${
										msg.status === 'send'
											? 'bg-primary text-white'
											: 'bg-gray-100 text-black'
									}`}
								>
									{msg.text}
								</div>
							</div>
						);
					})}
				</div> */}

        {/* Chat Body End */}

        {/* Chat Footer */}
        {/* <div className='chat-footer flex justify-center items-center p-2 drop-shadow-lg secondary-bg'>
					<div className=' w-full grid grid-cols-12  rounded-lg bg-gray-100 px-3 py-2'>
						<div className='col-span-9 flex mx-3 items-center '>
							<FontAwesomeIcon
								className='text-sm text-gray-500'
								icon={faPaperclip}
							/>

							<input
								className='text-xs text-gray-500 mx-5 w-full bg-transparent border-none outline-none focus:ring-0'
								placeholder='Type Message Here'
								type='text'
							/>
						</div>
						<div className='col-span-3 flex justify-end items-center'>
							<FontAwesomeIcon
								className='text-sm mx-1 text-gray-500'
								icon={faFaceSmile}
							/>
							<FontAwesomeIcon
								className='text-sm mx-1 text-gray-500'
								icon={faMicrophone}
							/>
							<FontAwesomeIcon
								className='text-sm mx-1 text-blue-500'
								icon={faPaperPlane}
							/>
						</div>
					</div>
				</div> */}
        {/* Chat Footer  End*/}
      </div>
    </>
  );
}

export default ChatItem;
