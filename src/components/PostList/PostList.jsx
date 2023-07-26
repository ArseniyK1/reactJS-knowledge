import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";

const PostList = ({ title, posts, onRemove }) => {
  if (!posts.length) {
    return <div className={styles["post-not-found"]}>Постов не найдено!</div>;
  }

  return (
    <>
      <h1 className={styles["title-list"]}>{title}</h1>
      {posts.map((posts, index) => (
        <PostItem
          key={index}
          number={index + 1}
          posts={posts}
          onRemove={onRemove}
        />
      ))}
    </>
  );
};

export default PostList;
