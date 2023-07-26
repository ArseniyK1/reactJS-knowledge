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
        <div className={styles.description}>
          <div className={styles.title}>
            {props.number}. {props.posts.title}
          </div>
          <div>{props.posts.description}</div>
        </div>
        <MyButton onClick={remove}>Удалить</MyButton>
      </div>
    </>
  );
};

export default PostItem;
