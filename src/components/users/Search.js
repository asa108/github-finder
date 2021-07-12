import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const gihubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
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
