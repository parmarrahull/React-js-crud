import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };
  return (
    <>
      <div className="container">
        <table className="table mt-20">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">WebSite</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>

                  <td>
                    <Link to={`/user/${user.id}`}>
                      <button type="button" class="btn btn-info mt-2">
                        View
                      </button>
                    </Link>
                    <Link to={`/user/edit/${user.id}`}>
                      <button type="button" class="btn btn-primary mt-2">
                        Edit
                      </button>
                    </Link>
                    <Link>
                      <button
                        onClick={() => deleteUser(user.id)}
                        type="button"
                        class="btn btn-danger mt-2"
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
