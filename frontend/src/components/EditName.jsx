import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditName = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "" });
  const updateData = () => {
    axios
      .put(`http://localhost:5000/api/update/${id}`, formData)
      .then((res) => {})
      .catch((err) => {
        console.log("Some Error Occured " + err);
      });

    navigate("/");
  };

  const getDataById = () => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((err) => {
        console.log("Some Error Occured " + err);
      });
  };

  useEffect(getDataById, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label name="name">Name: </label>
          <input
            type="text"
            value={formData.name}
            placeholder="Enter Name"
            onChange={(e) => setFormData({ name: e.target.value })}
          />
        </p>

        <button>Edit Name</button>
      </form>
    </div>
  );
};

export default EditName;
