import React, { useState, useEffect, useContext } from "react";
import EmployeeDetails from "./EmployeeDetails";
import { WorkContext } from "../context/ContextWork";
import EditEmploye from "./EditEmploye";
import ChountHeader from "./CountHeader";

const EmployeeList = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState(null); //Edit and Detail dropMenu

  const { filteredEmployees } = useContext(WorkContext);

  const [openDropdown, setOpenDropdown] = useState(null); //filter dropMenu
  const headers = [
    "photo",
    "employee ID",
    "first Name",
    "email ID",
    "companyName",
    "date of Joining",
    "status",
    "category",
    "All Data",
  ];
  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
    setisMenuOpen(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Terminates":
        return "bg-red-100 text-red-800";
      case "Resigned":
        return "bg-yellow-100 text-yellow-800";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Staff":
        return "bg-blue-100 text-blue-800"; // Mavi renk Staff için
      case "Labor":
        return "bg-orange-100 text-orange-800"; // Turuncu renk Labor için
      case "Management":
        return "bg-purple-100 text-purple-800"; // Mor renk Management için
      default:
        return "bg-gray-100 text-gray-800"; // Varsayılan renk
    }
  };

  const [filterEployeData, setfilterEployeData] = useState([]);
  const filterCategory = (categoryFilter, category) => {
    if (categoryFilter === "All Data") {
      setfilterEployeData([]);
      return;
    }
    const filterData = filteredEmployees.filter(
      (employee) => employee[category] === categoryFilter
    );
    setfilterEployeData(filterData);
  };

  const [showEditEmployee, setshowEditEmployee] = useState(false);
  const [editData, seteditData] = useState();
  const handleEdit = (eploye) => {
    setshowEditEmployee(true);
    seteditData(eploye);
  };
  const toggleEditEmployee = () => {
    setshowEditEmployee(false);
  };

  return (
    <div className="overflow-x-auto bg-gray-100 p-6 text-[14px] h-[100vh]">
      <ChountHeader
        data={filterEployeData.length ? filterEployeData : filteredEmployees}
      />

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={header}
                className="px-4 py-2 text-left text-sm font-semibold text-gray-600 relative"
              >
                <div className="flex items-center justify-between">
                  {header === "All Data" ? (
                    <button onClick={() => filterCategory(header)}>
                      <span>{header}</span>
                    </button>
                  ) : ["companyName", "status", "category"].includes(header) ? (
                    <button onClick={() => toggleDropdown(index)}>
                      <span>{header}</span>
                    </button>
                  ) : (
                    <span>{header}</span>
                  )}

                  {["companyName", "status", "category"].includes(header) ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="ml-2 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.188l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    ""
                  )}

                  {/* Dropdown menu */}
                  {openDropdown === index && (
                    <div className="absolute left-0 top-[35px] mt-1 w-[200px] z-20 bg-white border border-gray-200 rounded shadow-md">
                      <ul className="py-1 text-sm text-gray-700">
                        {[
                          ...new Set(
                            filteredEmployees.map((employe) => employe[header])
                          ),
                        ].map((uniqueValue, index) =>
                          uniqueValue !== "" ? (
                            <button
                              key={index}
                              onClick={() =>
                                filterCategory(uniqueValue, header)
                              }
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex flex-col w-full"
                            >
                              <li>{uniqueValue}</li>
                            </button>
                          ) : (
                            ""
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterEployeData.length > 0
            ? filterEployeData.map((employee) => (
                <tr key={employee.id} className="border-t">
                  <td className="px-4 py-3">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{employee.employeeID}</td>
                  <td className="px-4 py-3">{employee.name}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${employee.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {employee.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">{employee.companyName}</td>
                  <td className="px-4 py-3">{employee.joiningDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full  ${getStatusColor(
                        employee.status
                      )}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full  ${getCategoryColor(
                        employee.category
                      )}`}
                    >
                      {employee.category}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3">{employee.homeCountryAddress}</td> */}
                  <td className="px-4 py-3 relative">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => {
                          setisMenuOpen(
                            isMenuOpen === employee.id ? null : employee.id
                          );
                          setOpenDropdown(null);
                        }}
                        className="text-gray-600 hover:text-gray-800 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition duration-200"
                      >
                        <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
                      </button>

                      {employee.id === isMenuOpen ? (
                        <div className="absolute z-10 right-[100%] mt-2 w-36 top-[-50%]  bg-white border border-gray-200 rounded shadow-lg">
                          <button
                            onClick={() => handleEdit(employee)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setSelectedEmployee(employee)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            View Details
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                </tr>
              ))
            : filteredEmployees.map((employee) => (
                <tr key={employee.id} className="border-t">
                  <td className="px-4 py-3">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{employee.employeeID}</td>
                  <td className="px-4 py-3">{employee.name}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${employee.email}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {employee.email}
                    </a>
                  </td>
                  <td className="px-4 py-3">{employee.companyName}</td>
                  <td className="px-4 py-3">{employee.joiningDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full  ${getStatusColor(
                        employee.status
                      )}`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full  ${getCategoryColor(
                        employee.category
                      )}`}
                    >
                      {employee.category}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3">{employee.homeCountryAddress}</td> */}
                  <td className="px-4 py-3 relative">
                    <div className="relative inline-block text-left">
                      <button
                        onClick={() => {
                          setisMenuOpen(
                            isMenuOpen === employee.id ? null : employee.id
                          );
                          setOpenDropdown(null);
                        }}
                        className="text-gray-600 hover:text-gray-800 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition duration-200"
                      >
                        <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
                      </button>

                      {employee.id === isMenuOpen ? (
                        <div className="absolute z-10 right-[100%] mt-2 w-36 top-[-50%]  bg-white border border-gray-200 rounded shadow-lg">
                          <button
                            onClick={() => handleEdit(employee)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setSelectedEmployee(employee)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            View Details
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {/* Modal for employee details */}
      {selectedEmployee && (
        <EmployeeDetails
          employee={selectedEmployee}
          getCategoryColor={getCategoryColor}
          getStatusColor={getStatusColor}
          setSelectedEmployee={setSelectedEmployee}
        />
      )}
      {/* Edit for employee  */}
      <EditEmploye
        showEditEmployee={showEditEmployee}
        toggleEditEmployee={toggleEditEmployee}
        editData={editData}
        filterEployeData={filterEployeData}
        setfilterEployeData={setfilterEployeData}
      />
    </div>
  );
};

export default EmployeeList;
