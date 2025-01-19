import React from "react";
import { Calendar, Briefcase, Users } from "lucide-react";

const ChountHeader = ({ data }) => {
  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Users className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Employees</p>
          <p className="text-xl font-bold">{data.length}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="bg-green-100 p-3 rounded-full">
          <Briefcase className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Staff</p>
          <p className="text-xl font-bold">
            {data.filter((e) => e.category === "Staff").length}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <Calendar className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Labor</p>
          <p className="text-xl font-bold">
            {data.filter((e) => e.category === "Labor").length}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <Calendar className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Management</p>
          <p className="text-xl font-bold">
            {data.filter((e) => e.category === "Management").length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChountHeader;
