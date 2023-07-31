import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import PostFilter from "./components/PostFilter/PostFilter";
import "./App.css";

import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";
import Loader from "./UI/Loader/Loader";

import { useEffect, useState } from "react";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import PostService from "./API/PostService";
import { getPageCount } from "./utils/pages";
import Paginaton from "./UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]); // изначальные посты записаны в состоянии, чтобы их было легко обновлять

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false); // видимость загрузки в зависимости от того загрузились посты или нет
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const onCreateHandler = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
      {postError ? <h1>Произошла ошибка!</h1> : ""}
      {isPostsLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <PostList
          title="Список постов"
          posts={sortedAndSearchPosts}
          onRemove={removePostHandler}
        />
      )}
      <Paginaton changePage={changePage} totalPages={totalPages} page={page} />
    </div>
  );
}

export default App;
