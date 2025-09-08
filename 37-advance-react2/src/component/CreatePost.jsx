//import { useContext, useRef } from "react";
//import { PostList } from "./store/post-list-store";
//import { useNavigate } from "react-router-dom";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  //const navigate = useNavigate();

  /*  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();*/

  //const handleSubmit = (event) => {
  //event.preventDefault();
  /*const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";*/
  //  };

  return (
    <>
      <Form className="create-post" method="POST">
        <div class="userId">
          <label htmlFor="title" class="form-label">
            Enter your User ID here
          </label>
          <input
            type="text"
            name="userId"
            // ref={userIdElement}
            class="form-control"
            id="userId"
            placeholder="Your User ID"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Post title
          </label>
          <input
            type="text"
            name="title"
            //ref={postTitleElement}
            class="form-control"
            id="title"
            placeholder="How are you feeling today?"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="body" class="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            name="body"
            //ref={postBodyElement}
            rows="4"
            class="form-control"
            id="body"
            placeholder="Tell us more about it"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="reactions" class="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            name="reactions"
            //ref={reactionsElement}
            class="form-control"
            id="reactions"
            placeholder="How many people reacted to this post?"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="tags" class="form-label">
            Enter your hastags here
          </label>
          <input
            type="text"
            name="tags"
            //ref={tagsElement}
            class="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(formData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;

//Form
