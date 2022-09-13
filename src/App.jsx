import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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
  const baseUrl = "http://localhost:8324";
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
              {employee.firstname}
              {employee.lastname}
              {employee.department}
              {employee.age}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
