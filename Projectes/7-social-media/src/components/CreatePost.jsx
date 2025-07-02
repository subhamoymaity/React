import { useContext } from "react";
import { useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reationsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reations=reationsElement.current.value;
    const tags=tagsElement.current.value.split(" "); 
    //how to split string by space in js (search in google)
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reationsElement.current.value="";
    tagsElement.current.value="";
    addPost(userId,postTitle,postBody,reations,tags);
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Your User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="write post title.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          cols="50"
          className="form-control"
          id="body"
          placeholder="write post content.."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reationsElement}
          className="form-control"
          id="reations"
          placeholder="How many people reacted to this post..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please use tags using space.."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
