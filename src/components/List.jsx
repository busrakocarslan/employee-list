import React, { useEffect, useState } from "react";
import data from "../helper/data";
import "./list.scss"

function List({ page }) {
  const [users, setUsers] = useState([]);
  const pageKisi = 4;

  useEffect(() => {
    const sonKisi = page * pageKisi;
    const ilkKisi = sonKisi - pageKisi;
    const showKisi = data.slice(ilkKisi, sonKisi);
    setUsers(showKisi);
    console.log(setUsers);
  }, [page]);
  const firstIndex=(page-1)*pageKisi+1;
  const lastIndex=firstIndex+pageKisi-1

  return (   

    <div className="anaDiv">  
      <h1>Employe List</h1>
      <h5>(Employes {firstIndex} to {lastIndex} )</h5>      
      {users.map(({ id, name, age, image, email }) => (
        <div key={id} className="component">
          <div className="imgCard">
            <img src={image} alt={name} />
            <div className="infoCard">
              <h3>{name}</h3>
              <p>{email}</p>
              <small>{age}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
