import React, { useState } from "react";

const AddEmployee = ({ toggleAddEmployee, showAddEmployee }) => {
  const [employeeData, setEmployeeData] = useState({
    employeeID: "",
    photo: null,
    name: "",
    dob: "",
    gender: "",
    nationality: "",
    mothersName: "",
    homeCountryAddress: "",
    homeCountryPhone: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    email: "",
    passportNo: "",
    passportExpiryDate: "",
    passportIssuingCountry: "",
    companyName: "",
    joiningDate: "",
    category: "",
    designation: "",
    basicSalary: "",
    accommodationAllowance: "",
    travellingAllowance: "",
    others: "",
    currentGrossSalary: "",
    eligibilityForOvertime: "",
    ministryDesignation: "",
    ministryBasicSalary: "",
    ministryGrossSalary: "",
    laborCardNo: "",
    laborCardIssuanceDate: "",
    laborCardExpiry: "",
    visaNo: "",
    visaIssuanceDate: "",
    visaExpiry: "",
    emiratesIDNo: "",
    emiratesIDIssuanceDate: "",
    emiratesIDExpiry: "",
    salaryPaymentMode: "",
    bankAccountDetails: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(employeeData);
  };

  if (!showAddEmployee) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 overflow-y-auto max-h-[90vh]">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl  text-blue-500 font-bold">Add Employee</h2>
          <button
            onClick={toggleAddEmployee}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(employeeData).map((key) =>
              key === "photo" ? (
                <div key={key} className="col-span-full">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={key}
                  >
                    Photo
                  </label>
                  <input
                    type="file"
                    name={key}
                    id={key}
                    accept="image/*"
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        photo: e.target.files[0],
                      })
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ) : key === "status" ? (
                <div key={key}>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={key}
                  >
                    Status
                  </label>
                  <select
                    name={key}
                    id={key}
                    value={employeeData[key] || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select Status
                    </option>
                    <option value="Active">Active</option>
                    <option value="Resigned">Resigned</option>
                    <option value="Terminated">Terminated</option>
                  </select>
                </div>
              ) : key === "category" ? (
                <div key={key}>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={key}
                  >
                    category
                  </label>
                  <select
                    name={key}
                    id={key}
                    value={employeeData[key] || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Staff">Staff</option>
                    <option value="Labor">Labor</option>
                    <option value="Management">Management</option>
                  </select>
                </div>
              ) : (
                <div key={key}>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor={key}
                  >
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .trim()
                      .toLowerCase()
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </label>
                  <input
                    type={key.toLowerCase().includes("date") ? "date" : "text"}
                    name={key}
                    id={key}
                    value={employeeData[key]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              )
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={toggleAddEmployee}
              className="bg-red-600 mr-[10px] text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Cancle
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
