import { useState, useEffect } from "react";
import "./App.css";

// const _products = [
//   {
//     id: 1,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//     images: [
//       "https://dummyjson.com/image/i/products/1/1.jpg",
//       "https://dummyjson.com/image/i/products/1/2.jpg",
//       "https://dummyjson.com/image/i/products/1/3.jpg",
//       "https://dummyjson.com/image/i/products/1/4.jpg",
//       "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//     ],
//   },
//   {
//     id: 2,
//     title: "iPhone 9",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: "Apple",
//     category: "smartphones",
//     thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//     images: [
//       "https://dummyjson.com/image/i/products/1/1.jpg",
//       "https://dummyjson.com/image/i/products/1/2.jpg",
//       "https://dummyjson.com/image/i/products/1/3.jpg",
//       "https://dummyjson.com/image/i/products/1/4.jpg",
//       "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
//     ],
//   },
// ];

function App() {
  const baseUrl = "https://localhost:9384";
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setEmployees(data);
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
