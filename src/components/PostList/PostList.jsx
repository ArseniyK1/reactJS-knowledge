import PostItem from "../PostItem/PostItem";
import styles from "./PostList.module.css";

const PostList = ({ title, posts }) => {
  return (
    <>
      <h1 className={styles["title-list"]}>{title}</h1>
      {posts.map((posts, index) => (
        <PostItem number={index + 1} posts={posts} />
      ))}
    </>
  );
};

export default PostList;
