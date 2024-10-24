import { useNavigate,  } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa'; 

const FooterLayout: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
     { name: 'Connect', icon: <FaHome />, route: '/connect' },
    { name: 'Profile', icon: <FaUser />, route: '/profile' },
  ];

  return (
    <div className="w-full bottom-0 flex md:hidden sticky">
      <div
        className={`w-full bg-ter3 text-primary1 absolute bottom-0  
        transition-all duration-300 ease-in-out flex flex-col`}
      >
        <nav className="flex-grow flex">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.route)}
              className="flex items-center p-4 w-full hover:bg-ter2 focus:outline-none"
            >
              {/* Icon always shows */}
              <span className="text-lg">{item.icon}</span>

              {/* Name shows only on large screens */}
              <span className="ml-4 ">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

    </div>
  );
};

export default FooterLayout;
