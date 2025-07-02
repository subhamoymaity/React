import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (crrrentPostList, action) => {
  let newPostList = crrrentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = crrrentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...crrrentPostList];
  }
  return newPostList;
};





const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reations, tags) => {
    //console.log(`${userId},${postTitle}, ${postBody},${reations},${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reations: reations,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    // postId comes from post.jsx by onclick
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: " going to Mumbai",
    body: "Hi friends , Now i an going to Mumbai. Hope to enjoy a lot",
    reations: 2,
    userId: "user-9",
    tags: ["vacation", "Mimbi", "Enjoying"],
  },
  {
    id: "2",
    title: "pass ho bhai",
    body: "Hi friends ,4 sal ki masti bad bhi ho gya pass, Hard to believe",
    reations: 15,
    userId: "user-12",
    tags: ["Graduating", "unbelievable", "Enjoying"],
  },
];
export default PostListProvider;
