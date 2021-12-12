import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Search = () => {
  const [searchdata, setSearchdata] = useState([]);

  const getSearchkey = async (keyword) => {
    // const searchurl = `http://localhost:3003/users?q=${keyword}`;
    await axios
      .get("http://localhost:3003/users?q=" + keyword)
      .then((res) => setSearchdata(res.data));
    // console.log("fliterdata", filterdata);
  };

  return (
    <div>
      <div className="container mt-5">
        <h1 style={{ color: "#575700" }}>
          <u>
            <em>search Information</em>
          </u>
        </h1>
        <form class="d-flex mt-5">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => getSearchkey(e.target.value)}
          />
        </form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First_Name</th>
              <th scope="col">Last_Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchdata.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {/* <td>
                  <Link
                    className="btn btn-info mx-3"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteuser(user.id)}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
