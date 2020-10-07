import React, { useState } from "react";

const Employees = ({ listEmployees }) => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const data = await listEmployees();
    setEmployees(data);
  };

  return (
    <div>
      <button
        type="button"
        onClick={fetchEmployees}
        aria-label="Get Employee List"
      >
        Get Employee List
      </button>
      {employees && (
        <div className="emp-wrap" data-testid="emp-wrap">
          {employees.map((employee, index) => (
            <div
              key={index}
              aria-label="Employee Name"
              data-testid="single-item"
              className="emp-name"
            >
              {employee}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Employees;