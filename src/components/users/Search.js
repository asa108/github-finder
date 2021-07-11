import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ clearUsers, showClear, searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChange}
          // onChange={(e) => this.setState({ text: e.target.value })}
        />
        <input
          type="submit"
          value="Search"
          placeholder="Search Users"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear Form
        </button>
      )}
    </div>
  );
};

Search.propsTypes = {
  searchUsers: PropTypes.func.isRequird,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
