import { useState, useRef, useEffect } from "react";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-3 rounded-lg bg-gray-300 hover:bg-gray-400 transition-colors mx-2"
      >
        {isOpen ? (
          // 1. OPEN STATE ICON (Angle Down - "Click to Close")
          <svg 
            className="h-6 w-6 fill-current text-gray-700" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
            fill="none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          // 2. CLOSED STATE ICON (Angle Up - "Click to Open Up")
          <svg 
            className="h-6 w-6 fill-current text-gray-700" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
            fill="none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full mb-4 left-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50">
          <ul className="flex flex-col py-2">
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 mx-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 mx-2"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;