import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Ahmad");
  const [isPending, setIsPending] = useState(false);
  const [msg, setMsg] = useState("Adding Blog...");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
        .then(() => {
          setIsPending(false);
          setTitle("");
          setBody("");
          history.push("/");
        })
        .catch(() => {
          setTimeout(() => {
            setMsg("Failed to Add Blog!!");
          }, 1000);
        });
    }, 1000);
  };

  return (
    <div className="create">
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="ahmad">Ahmad</option>
          <option value="sidani">Sidani</option>
          <option value="sidz">Sidz</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>{msg}</button>}
      </form>
    </div>
  );
};

export default Create;
