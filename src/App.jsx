import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";

import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, description: "Javascript", title: "go learn JS!" },
    { id: 2, description: "Typescript", title: "go learn TS!" },
    { id: 3, description: "React", title: "go learn React!" },
  ]);

  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPostHandler = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]); // добавление нового поста
    setPost({ title: "", description: "" }); // двустороннее связывание (очищение инпутов)
  };

  const changeTitleHandler = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const changeDescriptionHandler = (event) => {
    setPost({ ...post, description: event.target.value });
  };

  return (
    <>
      <PostForm
        title={post.title}
        changeTitleHandler={changeTitleHandler}
        description={post.description}
        changeDescriptionHandler={changeDescriptionHandler}
        addPost={addNewPostHandler}
      />
      <PostList title="Список постов про JS" posts={posts} />
    </>
  );
}

export default App;
