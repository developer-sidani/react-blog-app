import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="not-found">
      <h2>Error 404!!</h2>
      <p>That Page Cannot Be Found</p>
      <Link to="/">Back to HomePage...</Link>
    </div>
  );
};

export default Error;
