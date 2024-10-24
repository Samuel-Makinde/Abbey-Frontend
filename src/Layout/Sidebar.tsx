// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Example icons

// // Define menu item types
// interface MenuItem {
//   name: string;
//   icon: JSX.Element;
//   route: string;
// }

// const Sidebar: React.FC = () => {
//   const navigate = useNavigate();

//   const menuItems: MenuItem[] = [
//     { name: 'Connect', icon: <FaHome />, route: '/connect' },
//     // { name: 'Connect', icon: <FaUser />, route: '/connect' },
//     { name: 'Profile', icon: <FaUser />, route: '/profile' },
//   ];

//   return (
//     <div
//       className={`hidden mt-16 min-h-screen md:block w-40 lg:w-52 xl:w-64  bg-primary3  text-primary1 fixed top-0 left-0  transition-all duration-300 ease-in-out h-screen`}
//     >
//       <nav className="flex-grow flex flex-col pt-10">
//         {menuItems.map((item) => (
//           <button
//             key={item.name}
//             onClick={() => navigate(item.route)}
//             className="flex items-center p-4 hover:bg-ter2 focus:outline-none"
//           >
//             {/* Icon always shows */}
//             <span className="text-lg">{item.icon}</span>

//             {/* Name always shows in Sidebar */}
//             <span className="ml-4">{item.name}</span>
//           </button>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa'; // Example icons

// Define menu item types
interface MenuItem {
  name: string;
  icon: JSX.Element;
  route: string;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const menuItems: MenuItem[] = [
    { name: 'Connect', icon: <FaHome />, route: '/connect' },
    { name: 'Profile', icon: <FaUser />, route: '/profile' },
  ];

  return (
    <div className={`hidden mt-16 min-h-screen md:block w-40 lg:w-52 xl:w-64 bg-primary3 text-primary1 fixed top-0 left-0 transition-all duration-300 ease-in-out h-screen`}>
      <nav className="flex-grow flex flex-col pt-10">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.route; // Check if the current path matches the item's route

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.route)}
              className={`flex items-center p-4 focus:outline-none ${
                isActive ? 'bg-ter2' : 'hover:bg-ter2'
              }`}
            >
              {/* Icon always shows */}
              <span className="text-lg">{item.icon}</span>

              {/* Name always shows in Sidebar */}
              <span className="ml-4">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
