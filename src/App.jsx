import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import "./App.css";

import { faker } from "@faker-js/faker";

import { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]); // изначальные посты записаны в состоянии, чтобы их было легко обновлять

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    setIsPostsLoading(true);
    setTimeout(() => {}, 2000);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000);
  };

  const onCreateHandler = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
  };

  return (
    <div className="container">
      <header>
        <MyButton onClick={() => setVisible(true)}>Создать пост</MyButton>
      </header>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={onCreateHandler} />
      </MyModal>

      <hr className="razdelitelnaya" />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <h2 className="loading">Идет загрузка постов....</h2>
      ) : (
        <PostList
          title="Список постов"
          posts={sortedAndSearchPosts}
          onRemove={removePostHandler}
        />
      )}
    </div>
  );
}

export default App;
