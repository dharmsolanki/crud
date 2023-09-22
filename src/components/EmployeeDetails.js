// EmployeeDetails.js
import React from 'react';

function EmployeeDetails({ employee }) {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Designation: {employee.post}</p>
      <p>Salary: {employee.salary}</p>
    </div>
  );
}

export default EmployeeDetails;
