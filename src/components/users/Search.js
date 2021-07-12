import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
  const gihubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      gihubContext.searchUsers(text);
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
      {gihubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={gihubContext.clearUsers}
        >
          Clear Form
        </button>
      )}
    </div>
  );
};

export default Search;
