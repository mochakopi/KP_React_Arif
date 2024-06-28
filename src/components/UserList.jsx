import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://667ea4d1f2cb59c38dc6843e.mockapi.io/api/v1/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">User List</h1>
      <p>Menu ini berisi daftar user yang ada di database mockapi.io.</p>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Gender</th>
            <th>State</th>
            <th>City</th>
            <th>Country</th>
            <th>Department</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>{user.gender}</td>
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              <td>{user.department}</td>
              <td>{user.is_active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

