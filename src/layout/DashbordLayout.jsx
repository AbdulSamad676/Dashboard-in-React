// // import DashboardHeader from '../component/Header/DashboardHeader';
// import React from 'react';
// // import Bigsidebar from '../component/sidebars/bigsidebar';
// // import SmallSidebar from '../component/sidebars/smallSidebar';
// // import { MdCancel } from 'react-icons/md';
// // import { GiHamburgerMenu } from 'react-icons/gi';
// import './newCss.css';
// // import { useWindowSize } from 'react-use';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// const DashboardLayout = ({ children }) => {
//   // const [isBigsidebar, setBigsidebar] = React.useState(true);
//   // const handleToggle = () => {
//   // 	setBigsidebar(prev => !prev);
//   // };
//   // const { width } = useWindowSize();
//   // React.useEffect(() => {
//   // 	if (width < 850) {
//   // 		setBigsidebar(false);
//   // 	} else {
//   // 		setBigsidebar(true);
//   // 	}
//   // }, [width]);

//   return (
//     <div className='grid grid-cols-12 '>
//       <div className='col-span-2 bg-primary h-screen flex justify-center'>
//         <Sidebar />
//       </div>

//       <main className=' flex flex-col col-span-10 h-full overflow-auto '>
//         <Header />
//         <div className='w-full '>{children}</div>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;
// DashboardLayout.js

import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children, title }) => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-2 bg-primary h-screen flex justify-center'>
        <Sidebar />
      </div>

      <main className=' flex flex-col col-span-10 h-full overflow-auto'>
        <Header title={title} />
        <div className='w-full'>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
