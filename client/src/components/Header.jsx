import React, { useState } from "react";
import AddEmploye from "./AddEmploye";

const Header = () => {
  const [showAddEmployee, setshowAddEmployee] = useState(false);
  const toggleAddEmployee = () => {
    setshowAddEmployee(!showAddEmployee);
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.postimg.cc/c4KshfWP/logo-2.png"
              className="w-12 h-13 object-cover"
              alt="Logo"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Aura Joinery Employee Management System
              </h1>
              <p className="mt-1 text-sm text-gray-500 sm:text-base">
                Efficient HR System
              </p>
            </div>
          </div>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            onClick={toggleAddEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>

      <AddEmploye
        showAddEmployee={showAddEmployee}
        toggleAddEmployee={toggleAddEmployee}
      />
    </header>
  );
};

export default Header;
