import { createContext, useReducer } from "react";
//import PostLists from "../PostList";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

//const PostList = createContext(DEFAULT_CONTEXT);

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
    //console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
    // console.log(`Delete post called for:${postId}`);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 0,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass",
    body: "Hi friends",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Mumbai", "Enjoying"],
  },
];

export default PostListProvider;
