import React, { useState, useEffect } from "react";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeList = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isMenuOpen, setisMenuOpen] = useState(null);
  const filteredEmployees = [
    {
      employeeID: "EMP001",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "John Doe",
      dob: "1990-05-15",
      gender: "Male",
      nationality: "American",
      mothersName: "Jane Doe",
      homeCountryAddress: "123 Main St, Springfield, IL",
      homeCountryPhone: "+1 555-1234",
      emergencyContactName: "Sarah Doe",
      emergencyContactPhone: "+1 555-5678",
      email: "johndoe@example.com",
      passportNo: "X1234567",
      passportExpiryDate: "2028-05-15",
      passportIssuingCountry: "USA",
      companyName: "TechCorp",
      joiningDate: "2020-01-10",
      category: "Staff",
      designation: "Software Engineer",
      basicSalary: "5000",
      accommodationAllowance: "1000",
      travellingAllowance: "500",
      others: "200",
      currentGrossSalary: "6700",
      eligibilityForOvertime: "Yes",
      ministryDesignation: "IT Specialist",
      ministryBasicSalary: "4500",
      ministryGrossSalary: "5300",
      laborCardNo: "LC123456",
      laborCardIssuanceDate: "2020-01-15",
      laborCardExpiry: "2025-01-15",
      visaNo: "V123456",
      visaIssuanceDate: "2020-02-01",
      visaExpiry: "2025-02-01",
      emiratesIDNo: "ID123456",
      emiratesIDIssuanceDate: "2020-02-15",
      emiratesIDExpiry: "2025-02-15",
      salaryPaymentMode: "Bank Transfer",
      bankAccountDetails: "Bank Name: XYZ, Account Number: 123456789",
      status: "Resigned",
    },
    {
      employeeID: "EMP002",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "Jane Smith",
      dob: "1985-09-22",
      gender: "Female",
      nationality: "British",
      mothersName: "Mary Smith",
      homeCountryAddress: "456 Oak St, London, UK",
      homeCountryPhone: "+44 20 7946 0958",
      emergencyContactName: "Mark Smith",
      emergencyContactPhone: "+44 20 7946 0959",
      email: "janesmith@example.com",
      passportNo: "B7654321",
      passportExpiryDate: "2026-09-22",
      passportIssuingCountry: "UK",
      companyName: "FinTech Ltd",
      joiningDate: "2019-06-05",
      category: "Labor",
      designation: "Data Analyst",
      basicSalary: "4500",
      accommodationAllowance: "800",
      travellingAllowance: "400",
      others: "150",
      currentGrossSalary: "5850",
      eligibilityForOvertime: "Yes",
      ministryDesignation: "Finance Specialist",
      ministryBasicSalary: "4000",
      ministryGrossSalary: "4800",
      laborCardNo: "LC765432",
      laborCardIssuanceDate: "2019-06-10",
      laborCardExpiry: "2024-06-10",
      visaNo: "V765432",
      visaIssuanceDate: "2019-07-01",
      visaExpiry: "2024-07-01",
      emiratesIDNo: "ID765432",
      emiratesIDIssuanceDate: "2019-07-15",
      emiratesIDExpiry: "2024-07-15",
      salaryPaymentMode: "Bank Transfer",
      bankAccountDetails: "Bank Name: ABC Bank, Account Number: 987654321",
      status: "Resigned",
    },
    {
      employeeID: "EMP003",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "Michael Johnson",
      dob: "1992-12-10",
      gender: "Male",
      nationality: "Canadian",
      mothersName: "Linda Johnson",
      homeCountryAddress: "789 Pine St, Toronto, Canada",
      homeCountryPhone: "+1 416-555-9876",
      emergencyContactName: "David Johnson",
      emergencyContactPhone: "+1 416-555-6543",
      email: "michaelj@example.com",
      passportNo: "C2345678",
      passportExpiryDate: "2027-12-10",
      passportIssuingCountry: "Canada",
      companyName: "GreenTech Solutions",
      joiningDate: "2021-03-20",
      category: "Staff",
      designation: "Project Manager",
      basicSalary: "6000",
      accommodationAllowance: "1200",
      travellingAllowance: "600",
      others: "250",
      currentGrossSalary: "8100",
      eligibilityForOvertime: "Yes",
      ministryDesignation: "Project Manager",
      ministryBasicSalary: "5500",
      ministryGrossSalary: "6400",
      laborCardNo: "LC234567",
      laborCardIssuanceDate: "2021-03-25",
      laborCardExpiry: "2026-03-25",
      visaNo: "V234567",
      visaIssuanceDate: "2021-04-01",
      visaExpiry: "2026-04-01",
      emiratesIDNo: "ID234567",
      emiratesIDIssuanceDate: "2021-04-15",
      emiratesIDExpiry: "2026-04-15",
      salaryPaymentMode: "Bank Transfer",
      bankAccountDetails: "Bank Name: DEF Bank, Account Number: 123987654",
      status: "Terminates",
    },
    {
      employeeID: "EMP004",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      name: "Emily Davis",
      dob: "1988-03-25",
      gender: "Female",
      nationality: "Australian",
      mothersName: "Anne Davis",
      homeCountryAddress: "321 Maple St, Sydney, Australia",
      homeCountryPhone: "+61 2 9386 7532",
      emergencyContactName: "John Davis",
      emergencyContactPhone: "+61 2 9386 7533",
      email: "emilyd@example.com",
      passportNo: "D3456789",
      passportExpiryDate: "2027-03-25",
      passportIssuingCountry: "Australia",
      companyName: "RetailCo",
      joiningDate: "2018-09-15",
      category: "Staff",
      designation: "HR Manager",
      basicSalary: "5500",
      accommodationAllowance: "900",
      travellingAllowance: "450",
      others: "200",
      currentGrossSalary: "7050",
      eligibilityForOvertime: "No",
      ministryDesignation: "HR Specialist",
      ministryBasicSalary: "5000",
      ministryGrossSalary: "5800",
      laborCardNo: "LC345678",
      laborCardIssuanceDate: "2018-09-20",
      laborCardExpiry: "2023-09-20",
      visaNo: "V345678",
      visaIssuanceDate: "2018-10-01",
      visaExpiry: "2023-10-01",
      emiratesIDNo: "ID345678",
      emiratesIDIssuanceDate: "2018-10-15",
      emiratesIDExpiry: "2023-10-15",
      salaryPaymentMode: "Bank Transfer",
      bankAccountDetails: "Bank Name: GHI Bank, Account Number: 654321987",
      status: "Active",
    },
  ];

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
  useEffect(() => {
    console.log("isMenuOpen güncellendi:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-auto bg-gray-100 p-6 text-[14px] ">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Photo
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Employee ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              First Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Email ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Company
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Date of Joining
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Status
            </th>
            {/* <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Location
            </th> */}
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Category
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.employeeID} className="border-t">
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
                        isMenuOpen === employee.employeeID
                          ? null
                          : employee.employeeID
                      );
                    }}
                    className="text-gray-600 hover:text-gray-800 flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition duration-200"
                  >
                    <i className="fa-solid fa-ellipsis-vertical text-lg"></i>
                  </button>

                  {employee.employeeID === isMenuOpen ? (
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
          setSelectedEmployee={setSelectedEmployee}
        />
      )}
    </div>
  );
};

export default EmployeeList;
