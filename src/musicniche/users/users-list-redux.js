import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../services/auth-thunks";

function UserListRedux() {
  const { users, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>
      <ul className="list-group">
        {error && (
          <li className="list-group-item">
            <h2>{error}</h2>
          </li>
        )}
        {loading && (
          <li className="list-group-item">
            <h2>Loading....</h2>
          </li>
        )}
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserListRedux;
