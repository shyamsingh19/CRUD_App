import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const [ID, setId] = useState(0);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://65634493ee04015769a6fc46.mockapi.io/crud/${ID}`, {
      Name: Name,
      Email: Email,
    })
      .then(() => {
        navigate("/read");
      }).catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <h2>Updation step</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          update
        </button>
        <Link to="/read">
        <button type="button" class="btn btn-success m-2">Back</button>

        </Link>
      </form>
    </>
  );
};

export default Update;
