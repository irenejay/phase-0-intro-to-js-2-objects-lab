


  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Using the spread operator to create a new object with the original key-value pairs
    // and updating the specified key with the new value
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Test case
  // Call the function with the specified updates
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');
  
  // Assertion using a testing library like Chai
  console.log(updatedEmployee); 


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
  let employee;

  beforeEach(function () {
    employee = { name: 'Irene Jimmy', streetAddress: '123 Main St' };
  });

  it('updates `employee` with the given `key` and `value` (destructive) and returns the entire updated employee', function () {
    let updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
    
    chai.expect(updatedEmployee).to.eql({ name: 'Irene Jimmy', streetAddress: '12 Broadway' });
    chai.expect(employee).to.eql({ name: 'Irene Jimmy', streetAddress: '12 Broadway' });
  });
});

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

describe('deleteFromEmployeeByKey(employee, key)', function () {
  it('deletes `key` from a clone of employee and returns the new employee (non-destructive)', function () {
    let employee = { name: 'Irene Jimmy', streetAddress: '123 Main St' };
    let newEmployee = deleteFromEmployeeByKey(employee, 'name');
    expect(newEmployee['name']).to.equal(undefined);
    expect(typeof newEmployee).to.equal('object');
    expect(employee['name']).to.equal('Irene Jimmy');
  });
});


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  let employee = {
    name: 'Irene Jimmy',
    age: 30,
    department: 'Engineering'
  };
  
  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('deletes the key and modifies the original employee', function () {
      let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
      expect(newEmployee['name']).to.equal(undefined);
      expect(employee).to.equal(newEmployee);
    });
  });
  
    

  
  
  

