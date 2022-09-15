import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const baseUrl = "http://bscebeci.de:8324";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    (async () => {
      setEmployees((await axios.get(baseUrl)).data);
    })();
  }, []);

  return (
    <div className="App">
      <div>Employees</div>
      <div>
        {employees.map((employee, i) => {
          return (
            <div key={i}>
              <div>{employee.firstname}</div>
              <div>{employee.lastname}</div>
              <div>{employee.department}</div>
              <div>{employee.age}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
