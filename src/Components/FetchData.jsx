// import React, { useEffect, useState } from 'react';

// const DataFetch = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchData = () => {
//     setLoading(true);
//     console.log("Fetching data...");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         const limitedUsers = data.slice(0, 5);
//         setUsers(limitedUsers);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <button onClick={fetchData}>Fetch Users Data</button>

//       {loading ? (
//         <p>Loading Users Data...</p>
//       ) : (
//         <ul style={{ listStyle: "none" }}>
//           {users.map((user) => (
//             <li key={user.id}> <br />
//               {user.name} <br />
//               {user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DataFetch;
