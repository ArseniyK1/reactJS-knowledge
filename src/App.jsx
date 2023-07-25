import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";

import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, description: "Javascript", title: "go learn JS!" },
    { id: 2, description: "Typescript", title: "go learn TS!" },
    { id: 3, description: "React", title: "go learn React!" },
  ]);

  const onCreateHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
  };

  return (
    <>
      <PostForm create={onCreateHandler} />
      <PostList
        title="Список постов про JS"
        posts={posts}
        onRemove={removePostHandler}
      />
    </>
  );
}

export default App;
