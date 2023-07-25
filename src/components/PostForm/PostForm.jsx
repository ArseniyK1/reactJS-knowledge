import styles from "./PostForm.module.css";
import { Button, TextField } from "@mui/material";

const PostForm = (props) => {
  return (
    <form className={styles.form}>
      <TextField
        className={styles.mInputs}
        id="outlined-basic"
        label="Название поста"
        variant="outlined"
        value={props.title}
        onChange={props.changeTitleHandler}
      />
      <TextField
        className={styles.mInputs}
        id="outlined-basic"
        label="Описание поста"
        variant="outlined"
        value={props.description}
        onChange={props.changeDescriptionHandler}
      />
      <Button variant="contained" onClick={props.addPost}>
        Добавить
      </Button>
    </form>
  );
};

export default PostForm;
