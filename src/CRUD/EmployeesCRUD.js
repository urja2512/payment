import { useState } from "react";

function EmployeesCRUD() {

  const [eid, setEid] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [newEmployee, setNewEmploye] = useState(
    {
      "id": "",
      "name": "",
      "email": "",
      "salary": ""
    }
  );

  const [empList, setEmpList] = useState([
    {
      "id": "1",
      "name": "Nisha",
      "email": "Nisha@gmail.com",
      "salary": 500
    },
    {
      "id": "2",
      "name": "Sumitra",
      "email": "Sumitra@gmail.com",
      "salary": 200
    },
    {
      "id": "3",
      "name": "Minee",
      "email": "Minee@gmail.com",
      "salary": 100
    }
  ]);

  const getEmployeeById = (eid) => {
    console.log("getEmployeeById");
    const index = empList.findIndex((emp) => emp.id === eid);

    return index >= 0 ? empList[index] : "Employee id Not found.";
  }
  const getAllEmployees = () => {
    console.log("getAllEmployees");
    return empList;
  }
  const addEmployee = (newEmployee) => {
    console.log("addEmployee");
    empList.push(newEmployee);
  }
  const updateEmployee = (updateEmployee, uid) => {
    console.log("updateEmployee");
    const index = empList.findIndex((emp) => emp.id === uid);

    if (index >= 0) {
      empList[index] = { ...empList[index], ...updateEmployee }
    }

  }

  const deleteEmployeeById = (eid) => {
    console.log("deleteEmployeeById"+eid);
    const index = empList.findIndex((emp) => emp.id === eid);
    console.log("emp found at " +index);
    if(index < 0) return "Employee id does not exists.";

    empList.splice(index, 1);
    return "Employee deleted successfully.";
  }

  const sortEmployeeByName = () => {
    empList.sort((e1, e2) => {
      if (e1.name < e2.name) { return -1; }
      if (e1.name > e2.name) { return 1; }
      return 0;
    })
  }

  const sortEmployeeBySalary = () => {

    empList.sort((e1, e2) => e1.salary - e2.salary);
  }
  const searchEmployeeByName = () => { }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewEmploye((preValues) => ({ ...preValues, [name]: value }))
  };

  return (
    <>
      <hr />
      <h3>Add Employee </h3>
      <input type="text" name="id" value={newEmployee.id} onChange={(e) => handleChange(e)} placeholder="Enter emp id"></input>
      <input type="text" name="name" value={newEmployee.name} onChange={(e) => handleChange(e)} placeholder="Enter emp name"></input>
      <input type="text" name="email" value={newEmployee.email} onChange={(e) => handleChange(e)} placeholder="Enter emp Email"></input>
      <input type="text" name="salary" value={newEmployee.salary} onChange={(e) => handleChange(e)} placeholder="Enter emp salary"></input>

      <input type="button" onClick={() => {
        addEmployee(newEmployee)
      }} value="add Employee" />

      <hr />

      Employee Id:
      <input type="text" value={eid} onChange={(e) => setEid(e.target.value)} placeholder="Enter emp id" />
      <br />
      <input type="button" onClick={() => { console.log(getEmployeeById(eid)) }} value="getEmployeeByid" />

      <input type="button" onClick={() => { console.log(getAllEmployees()) }} value="getAllEmployee" />


      <input type="button" onClick={() => {
        updateEmployee({
          "name": "Sree",
          "email": "sree@capgi.com"
        }, 3)
      }} value="Update Employee" />

      <input type="button" onClick={() => { console.log(deleteEmployeeById(eid)) }} value="delete Employee " />
      
      <input type="button" onClick={() => { sortEmployeeByName() }} value="Sort Employees by name " />
      <input type="button" onClick={() => { sortEmployeeBySalary() }} value="Sort Employees by salary " />

      <hr />
      Search Employee:
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="SearchEmployee by name." />
      <br />
      {
        empList.filter(
          (emp) => {
            if (searchTerm === "") { return true }
            else {
              // if(emp.name.toLowerCase().includes(searchTerm.toLowerCase())){
              if (Object.values(emp).join(' ').toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
              }
              else return false;
            }
          }
        )
          .map(
            (emp) => {
              return <p key={emp.id}> {JSON.stringify(emp)}</p>
            })
      }
    </>
  );


}
export default EmployeesCRUD;


