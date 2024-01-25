import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, settabledark] = useState(``);

  function getData() {
    axios
      .get("https://65634493ee04015769a6fc46.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://65634493ee04015769a6fc46.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, Name, Email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="form-check form-switch" >
        <input
          class="form-check-input"
          type="checkbox"
        onClick={()=>{
            if(tabledark===`table-dark`) settabledark("");
            else settabledark(`table-dark`);
        }}
        />
      </div>

      <h3>Read operation</h3>
      <Link to="/">
        <button class="btn btn-secondary">Create new data</button>
      </Link>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.Name}</td>
              <td>{eachData.Email}</td>
              <td>
                <Link to="/update">
                  <button
                    onClick={() =>
                      setToLocalStorage(
                        eachData.id,
                        eachData.Name,
                        eachData.Email
                      )
                    }
                    class="btn btn-danger "
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(eachData.id)}
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
