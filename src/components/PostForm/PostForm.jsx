import styles from "./PostForm.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPostHandler = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", description: "" }); // двустороннее связывание (очищение инпутов)
  };

  return (
    <form className={styles.form} onSubmit={addNewPostHandler}>
      <TextField
        className={styles.mInputs}
        id="outlined-basic"
        label="Название поста"
        variant="outlined"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <TextField
        className={styles.mInputs}
        id="outlined-basic"
        label="Описание поста"
        variant="outlined"
        value={post.description}
        onChange={(event) =>
          setPost({ ...post, description: event.target.value })
        }
      />
      <Button type="submit" variant="contained">
        Добавить
      </Button>
    </form>
  );
};

export default PostForm;
