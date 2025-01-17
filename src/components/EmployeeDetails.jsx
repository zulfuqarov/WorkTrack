import React from "react";

const EmployeeDetails = ({ employee, setSelectedEmployee }) => {
  const onClose = () => {
    setSelectedEmployee(null);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50 ">
      <div className="bg-white p-8 rounded-lg w-[90%] h-[95%] md:w-[70%] lg:w-[50%] shadow-2xl overflow-auto ">
        <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Employee Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center mb-8">
          <img
            src={employee.photo}
            alt={employee.name}
            className="w-32 h-32 rounded-full border-4 border-teal-500 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">
            {employee.name}
          </h3>
          <p className="text-sm text-gray-500">
            {employee.designation} at {employee.companyName}
          </p>
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <strong>Date of Birth:</strong> {employee.dob}
            </div>
            <div>
              <strong>Gender:</strong> {employee.gender}
            </div>
            <div>
              <strong>Nationality:</strong> {employee.nationality}
            </div>
            <div>
              <strong>Mother's Name:</strong> {employee.mothersName}
            </div>
            <div>
              <strong>Home Address:</strong> {employee.homeCountryAddress}
            </div>
            <div>
              <strong>Home Phone:</strong> {employee.homeCountryPhone}
            </div>
            <div>
              <strong>Email:</strong> {employee.email}
            </div>
            <div>
              <strong>Emergency Contact:</strong>{" "}
              {employee.emergencyContactName} - {employee.emergencyContactPhone}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Employment Details
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <strong>Joining Date:</strong> {employee.joiningDate}
              </div>
              <div>
                <strong>Category:</strong> {employee.category}
              </div>
              <div>
                <strong>Basic Salary:</strong> ${employee.basicSalary}
              </div>
              <div>
                <strong>Accommodation Allowance:</strong> $
                {employee.accommodationAllowance}
              </div>
              <div>
                <strong>Travelling Allowance:</strong> $
                {employee.travellingAllowance}
              </div>
              <div>
                <strong>Gross Salary:</strong> ${employee.currentGrossSalary}
              </div>
              <div>
                <strong>Eligibility for Overtime:</strong>{" "}
                {employee.eligibilityForOvertime}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Document Details
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <strong>Passport No:</strong> {employee.passportNo} (Expires:{" "}
                {employee.passportExpiryDate})
              </div>
              <div>
                <strong>Visa No:</strong> {employee.visaNo} (Expires:{" "}
                {employee.visaExpiry})
              </div>
              <div>
                <strong>Emirates ID:</strong> {employee.emiratesIDNo} (Expires:{" "}
                {employee.emiratesIDExpiry})
              </div>
              <div>
                <strong>Labor Card No:</strong> {employee.laborCardNo} (Expires:{" "}
                {employee.laborCardExpiry})
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-500">
            Status: <span className="text-red-500">{employee.status}</span>
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
