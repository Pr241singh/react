import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
//import PostList from "./PostList";
import { PostList } from "./store/post-list-store";

const Post = ({ Post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div class="card post-card" style={{ maxWidth: "30rem" }}>
        <div class="card-body">
          <h5 class="card-title">
            {Post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(Post.id)}
            >
              <AiFillDelete />
            </span>
          </h5>
          <p class="card-text">{Post.body}</p>
          {Post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            A Simple {Post.reactions} post.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

//card
