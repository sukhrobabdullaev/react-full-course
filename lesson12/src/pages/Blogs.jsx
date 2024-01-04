import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <h1>Blogs - bu routerdan kevotti</h1>
      <Link to={"/blogs/posts"}>Posts ga otish</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
        fugiat, quo deleniti culpa optio provident architecto similique
        reiciendis inventore consequuntur quis dolorum labore dolores assumenda
        perspiciatis reprehenderit, id ratione odio ipsam. Nesciunt, quia.
        Tempore, officia quos! Tenetur reprehenderit alias quia. Distinctio sint
        nesciunt excepturi itaque expedita facilis accusamus possimus,
        laboriosam assumenda repudiandae provident vero rem quas reiciendis!
        Nesciunt, laboriosam!
      </p>
    </div>
  );
};

export default Blogs;
