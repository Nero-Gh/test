import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Some Error Occured" + err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/delete/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log("Some Error Occured" + err);
      });

    window.location.reload();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  <Link to={`/update/${item._id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => deleteHandler(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
