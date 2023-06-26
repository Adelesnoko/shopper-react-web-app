import React, { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../services/auth-service";

function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
  });

  const handleUpdateUser = async () => {
    const user = await updateUser(newUser._id, newUser);
    setUsers(users.map((user) => (user._id === newUser._id ? newUser : user)));
  };

  const handleEditUser = async (user) => {
    setNewUser(user);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateUser = async () => {
    const user = await createUser(newUser);
    setUsers([...users, user]);
    setNewUser({});
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={() => handleUpdateUser()}
            className="btn btn-primary float-end"
          >
            Update
          </button>
          <button
            onClick={handleCreateUser}
            className="btn btn-success float-end"
          >
            Create
          </button>
          <input
            placeholder="Username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            className="form-control w-50"
          />
          <input
            placeholder="Password"
            value={newUser.password}
            type="password"
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className="form-control w-50"
          />
          <input
            placeholder="First Name"
            value={newUser.firstName}
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
            className="form-control w-50"
          />
          <input
            placeholder="Last Name"
            value={newUser.lastName}
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
            className="form-control w-50"
          />
        </li>
        {users.map((user) => (
          <li className="list-group-item" key={user._id}>
            <button
              onClick={() => handleEditUser(user)}
              className="btn btn-warning float-end"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteUser(user._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Users;
