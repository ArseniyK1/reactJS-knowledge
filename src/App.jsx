import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import styles from "./App.module.css";
import MySelect from "./UI/select/MySelect";

import { Button, TextField } from "@mui/material";
import { useMemo, useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, description: "пп", title: "йй" },
    { id: 2, description: "лл", title: "аа" },
    { id: 3, description: "фф", title: "вв" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log('Func "SortedPosts" succeeded');
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const sortsPosts = (sort) => {
    setSelectedSort(sort);
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
      <TextField
        className={styles.mInputs}
        id="outlined-basic"
        label="Поиск..."
        variant="outlined"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <br />
      <br />
      <MySelect
        className={styles.sort}
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
          posts={sortedAndSearchPosts}
          onRemove={removePostHandler}
        />
      ) : (
        <div className={styles["post-not-found"]}>Постов не найдено!</div>
      )}
    </div>
  );
}

export default App;
