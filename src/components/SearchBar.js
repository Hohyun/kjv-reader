import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value.replace(/\s+/g, "/"));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={(e) => onFormSubmit(e)} className="ui form">
        <div className="ui field">
          <label>Bible Search</label>
          <input
            type="text"
            placeholder="Gn 1 1 5 => Genesis 1:1~5"
            value={term}
            onChange={(e) => onInputChange(e)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
