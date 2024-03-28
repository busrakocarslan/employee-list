import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App({ users }) {
  const [page, setPage] = useState(1);
  const nexPage = () => {
    if (page * 4 < data.length) {
      setPage(page + 1);
    } else if (page * 4 == data.length) {
      setPage(1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div>
      <div className="buttons">
        <button onClick={prevPage}>PREV</button>
        <button onClick={nexPage}>NEXT</button>
      </div>
      <List page={page} />
    </div>
  );
}

export default App;
