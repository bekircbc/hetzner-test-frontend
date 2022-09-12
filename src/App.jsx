import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const baseUrl = "http://localhost:9384";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(baseUrl);
      setEmployees(data.data);
      console.log(employees);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Employees</h1>
      {employees.forEach((employee) => {
        <div className="card">
          <div>{employee.firstname}</div>
          <div>{employee.lastname}</div>
          <div>{employee.department}</div>
          <div>{employee.age}</div>
        </div>;
      })}
    </div>
  );
}

export default App;
