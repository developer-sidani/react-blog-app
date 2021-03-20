import { useState } from "react";
import { useParams } from "react-router";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const [isPend, setIsPend] = useState(false);
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, isPending, is_Pending } = UseFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleClick = () => {
    setIsPend(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      }).then(() => {
        setIsPend(false);
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="blog-details">
      {isPending && <div>{is_Pending}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isPend && <button onClick={handleClick}>delete</button>}
          {isPend && <button disabled>DELETING...</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
