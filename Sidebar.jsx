import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navLinks = [
    { path: '/vision', label: 'Vision' },
    { path: '/mission', label: 'Mission' },
    { path: '/objectives', label: 'Objectives' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-blue-600 text-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-auto
        w-64
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-blue-500">
          <h1 className="text-xl font-bold text-white"> Vission and Mission</h1>
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 hover:bg-blue-500 rounded-lg transition-colors duration-200"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-700 text-white shadow-md' 
                      : 'text-blue-100 hover:bg-blue-500 hover:text-white'
                    }
                  `}
                  onClick={() => {
                    // Close sidebar on mobile after navigation
                    if (window.innerWidth < 768) {
                      toggleSidebar();
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-500">
          <p className="text-sm text-blue-200 text-center">
            {/* © 2024 College Name */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
