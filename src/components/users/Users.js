import React, { useContext, useEffect, useCallback } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  
  useEffect(() => {
      setInitialUsers(); 
  }, []);
  
  const setInitialUsers = useCallback(() => {
      githubContext.setnIitialUser();
    }
  )
    
  // useEffect(() => {
  //   const setInitialUsers = () => {
  //      githubContext.setnIitialUser();
  //   }
  //   setInitialUsers();
  // }, []);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
