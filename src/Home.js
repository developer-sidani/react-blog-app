import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
  const { data: blogs, isPending, is_Pending } = UseFetch(
    "http://localhost:8000/blogs"
  );

  return (
    <div className="home">
      {isPending && <div>{is_Pending}</div>}
      {blogs && <BlogList blogs={blogs} title="Sidani" />}
    </div>
  );
};

export default Home;
