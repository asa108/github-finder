import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p className="lead">The page you are looking fot is not found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
