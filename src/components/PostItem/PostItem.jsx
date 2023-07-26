import { Button } from "@mui/material";
import styles from "./PostItem.module.css";

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
        <Button className={styles.btn} variant="contained" onClick={remove}>
          Удалить
        </Button>
      </div>
    </>
  );
};

export default PostItem;
