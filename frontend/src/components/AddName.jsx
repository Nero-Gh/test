import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddName = () => {
  const [formData, setFormData] = useState({ name: "" });
  const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     const [name, value] = e.target;

  //     setFormData((prev) => {
  //       return {
  //         ...prev,
  //         [name]: value,
  //       };
  //     });
  //   };

  const addData = () => {
    axios
      .post("http://localhost:5000/api/add", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Some Error Occured " + err);
      });

    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label name="name">Name: </label>
          <input
            type="text"
            name={formData.name}
            placeholder="Enter Name"
            onChange={(e) => setFormData({ name: e.target.value })}
          />
        </p>

        <button>Add Name</button>
      </form>
    </div>
  );
};

export default AddName;
