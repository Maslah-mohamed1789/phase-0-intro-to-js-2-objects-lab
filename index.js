// Write your solution in this file!

    

const employee = {
    name: "Maslah",
    streetAddress: "Tom Mboya"
  };
  
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; 
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example Usage:
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Developer");
  console.log(updatedEmployee); 
  console.log(employee); 
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Developer");
  console.log(employee); 
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutAddress); 
  console.log(employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employee); 
  