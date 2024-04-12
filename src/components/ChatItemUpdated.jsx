import React, { useState } from 'react';
import SingleChat from './SingleChat';
import Img1 from '../assets/images/single1.png';
import Img2 from '../assets/images/single2.png';
import Img3 from '../assets/images/single3.png';
import Img4 from '../assets/images/single4.png';
import Img5 from '../assets/images/single5.png';
import Img6 from '../assets/images/single6.png';
import ChatBody from './ChatBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faEllipsis,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

function ChatItemUpdated() {
  const msgs = [
    {
      text: 'Hi Ahmad How are you?',
      status: 'send',
    },
    {
      text: 'Hello Jhon I am good! Whats going there?',
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
      text: 'Hello Jhon I am good! Whats going there?',
      status: 'receive',
    },
    {
      text: 'Hi Ahmad How are you?',
      status: 'send',
    },
    {
      text: 'Hello Jhon I am good! Whats going there?',
      status: 'receive',
    },
  ];

  const [singleItems, setSingleItems] = useState([
    {
      id: 1,
      profileImg: Img1,
      name: 'Alex Bywalya',
      time: '4:45',
      message: 'Hello Alex',
      isActive: true,
      textArray: [
        {
          text: 'Hi Ahmad How are you?',
          status: 'send',
        },
        {
          text: 'Hello Jhon I am good! Whats going there?',
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
      ],
    },
    {
      id: 2,
      profileImg: Img2,
      name: 'Jay Bandy',
      time: '4:45',
      message: 'Are we Meeting today',
      isActive: false,
      textArray: [
        {
          text: 'Hi Ahmad How are you?',
          status: 'send',
        },
        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'receive',
        },
      ],
    },
    {
      id: 3,
      profileImg: Img3,
      name: 'Mike Chalo',
      time: '4:45',
      message: 'Are we Meeting today',
      isActive: false,
      textArray: [
        {
          text: 'Hi Mike Chalo How are you?',
          status: 'send',
        },
        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'receive',
        },

        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'send',
        },
      ],
    },
    {
      id: 4,
      profileImg: Img4,
      name: 'Jordan Mate',
      time: '4:45',
      message: 'Are we Meeting today',
      isActive: false,
      textArray: [
        {
          text: 'Hi Mate Chalo How are you?',
          status: 'send',
        },
        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'receive',
        },

        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'send',
        },
      ],
    },
    {
      id: 5,
      profileImg: Img5,
      name: 'Jani Zulu',
      time: '4:45',
      message: 'Are we Meeting today',
      isActive: false,
      textArray: [
        {
          text: 'Hi Jani Zulu How are you?',
          status: 'send',
        },
        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'receive',
        },

        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'send',
        },
      ],
    },
    {
      id: 6,
      profileImg: Img6,
      name: 'Ranvi Cheelo',
      time: '4:45',
      message: 'Are we Meeting today',
      isActive: false,
      textArray: [
        {
          text: 'Hi Ranvi How are you?',
          status: 'send',
        },
        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'receive',
        },

        {
          text: 'Hello Jhon I am good! Whats going there?',
          status: 'send',
        },
      ],
    },
  ]);

  const handleButtonClick = (index) => {
    setSingleItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isActive: i === index ? !item.isActive : false, // Toggle the clicked item, deselect others
      })),
    );
  };

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
              className={'w-11/12'}
              onClick={() => handleButtonClick(index)}
            >
              <SingleChat data={item} />
            </button>
          ))}
        </div>
      </div>
      {/* Chat Items Section End */}
      {/* chat conversation */}
      <div className=' p-1 flex flex-col justify-between col-span-12 sm:col-span-7'>
        <ChatBody data={singleItems?.find((item) => item.isActive)} />
        {/* {singleItems?.find((item) => item.isActive)} */}
        {/* <ChatBody data={singleItems[0]} /> */}
      </div>
    </>
  );
}

export default ChatItemUpdated;
