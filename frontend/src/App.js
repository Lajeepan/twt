// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]); // State to store user data
//   const [loading, setLoading] = useState(true); // State for loading indicator

//   useEffect(() => {
//     // Fetch data from backend API
//     fetch("http://localhost:3001/api/users") // Replace <port> with your backend port
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data); // Update state with user data
//         setLoading(false); // Set loading to false
//       })
//       .catch((error) => {
//         console.error("Error fetching users:", error);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array means this runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user._id}>
//             Name: {user.name} | Email: {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching data from the backend
    fetch('http://localhost:3001/api/users') // Adjust the URL to match your backend
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data); // Set fetched data to the state
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item) => (
        <tr key={item.id}>
          <td>{item._id}</td>
          <td>{item.userName } {item.name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
};

export default App;
