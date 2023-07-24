import PostList from "./components/PostList/PostList";
import { Button, TextField, useScrollTrigger } from "@mui/material";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, description: "Javascript", title: "go learn JS!" },
    { id: 2, description: "Typescript", title: "go learn TS!" },
    { id: 3, description: "React", title: "go learn React!" },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewPostHandler = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setDescription("");
    setTitle("");
  };

  return (
    <>
      <form className={styles.form}>
        <TextField
          className={styles.mInputs}
          id="outlined-basic"
          label="Название поста"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={styles.mInputs}
          id="outlined-basic"
          label="Описание поста"
          variant="outlined"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button variant="contained" onClick={addNewPostHandler}>
          Добавить
        </Button>
      </form>
      <PostList title="Список постов про JS" posts={posts} />
    </>
  );
}

export default App;
