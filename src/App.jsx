import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import styles from "./App.module.css";

import { useState } from "react";
import MySelect from "./UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, description: "Javascript", title: "go learn JS!" },
    { id: 2, description: "Typescript", title: "go learn TS!" },
    { id: 3, description: "React", title: "go learn React!" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const sortsPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  const onCreateHandler = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
  };

  return (
    <div className={styles.container}>
      <PostForm create={onCreateHandler} />
      <hr className={styles.razdelitelnaya} />
      <MySelect
        value={selectedSort}
        onChange={sortsPosts}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "description", name: "По описанию" },
        ]}
      />
      {posts.length !== 0 ? (
        <PostList
          title="Список постов про Frontend"
          posts={posts}
          onRemove={removePostHandler}
        />
      ) : (
        <div className={styles["post-not-found"]}>Постов не найдено!</div>
      )}
    </div>
  );
}

export default App;
