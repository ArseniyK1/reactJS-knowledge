import { Button } from "@mui/material";
import styles from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <>
      <div className={styles.post}>
        <div className={styles.description}>
          <div className={styles.title}>
            {props.number}. {props.posts.title ? props.posts.title : "title"}
          </div>
          <div>
            {props.posts.description ? props.posts.description : "description"}
          </div>
        </div>
        <Button
          className={styles.btn}
          variant="contained"
          onClick={() => {
            props.onRemove(props.post);
          }}
        >
          Удалить
        </Button>
      </div>
    </>
  );
};

export default PostItem;
