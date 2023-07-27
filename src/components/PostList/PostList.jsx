import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ title, posts, onRemove }) => {
  if (!posts.length) {
    return <div className={styles["post-not-found"]}>Постов не найдено!</div>;
  }

  return (
    <>
      <h1 className={styles["title-list"]}>{title}</h1>
      <TransitionGroup>
        {posts.map((posts, index) => (
          <CSSTransition key={posts.id} timeout={500} classNames="post">
            <PostItem
              key={index}
              number={index + 1}
              posts={posts}
              onRemove={onRemove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default PostList;
