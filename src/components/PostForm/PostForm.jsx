import styles from "./PostForm.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPostHandler = (event) => {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" }); // двустороннее связывание (очищение инпутов)
  };

  return (
    <form className={styles.form} onSubmit={addNewPostHandler}>
      <MyInput
        placeholder="Название поста"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        placeholder="Описание поста"
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton type="submit" variant="contained">
        Добавить
      </MyButton>
    </form>
  );
};

export default PostForm;
