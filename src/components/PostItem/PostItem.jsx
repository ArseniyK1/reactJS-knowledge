import { Button } from "@mui/material";
import styles from "./PostItem.module.css";
import MyButton from "../../UI/button/MyButton";

const PostItem = (props) => {
  const remove = () => {
    props.onRemove(props.posts);
  };

  return (
    <>
      <div className={styles.post}>
        <div className={styles.body}>
          <div className={styles.title}>
            {props.posts.id}. {props.posts.title}
          </div>
          <div>{props.posts.body}</div>
        </div>
        <MyButton onClick={remove}>Удалить</MyButton>
      </div>
    </>
  );
};

export default PostItem;
