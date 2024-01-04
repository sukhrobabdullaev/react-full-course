import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <img
        src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
        alt=""
      />
      <Link to={'/'}>go back</Link>
    </div>
  );
};

export default NotFound;
