import React from "react";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
const App = () => {
  return (
    <div className="h-[100%] ">
      <Header />
      <EmployeeList />
    </div>
  );
};

export default App;
