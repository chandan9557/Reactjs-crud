import React from "react";

function Search() {
  return (
    <>
      <div className="input-group mb-3 mt-4">
        <input type="text" className="form-control" placeholder="Search Data" />
        <span className="input-group-text">
          <button className="btn btn-outline-danger">Search</button>
        </span>
      </div>
    </>
  );
}

export default Search;
