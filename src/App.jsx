import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import styles from "./App.module.css";

import { faker } from "@faker-js/faker";

import { Button, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: faker.person.firstName(),
      title: faker.commerce.department(),
    },
    {
      id: 2,
      description: faker.person.firstName(),
      title: faker.commerce.department(),
    },
    {
      id: 3,
      description: faker.person.firstName(),
      title: faker.commerce.department(),
    },
  ]); // изначальные посты записаны в состоянии, чтобы их было легко обновлять

  // const [selectedSort, setSelectedSort] = useState(""); // состояние для сортировки по какому-то критерию
  // const [searchQuery, setSearchQuery] = useState(""); // состояние для сортировки по поиску

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log('Func "SortedPosts" succeeded');
    if (filter.sort) {
      // если выбрана категория сортировки, то
      return [...posts].sort((firstValue, nextValue) =>
        firstValue[filter.sort].localeCompare(nextValue[filter.sort])
      ); /* создаем копию массива с нашими постами (потому что метод sort мутирует массив и возвращает новый массив)
         и с помощью функции localeCompare, предназначенной для сортировки строк, возвращаем отсортированный массив */
    }

    return posts; // если категория не выбрана, то возвращаем те же самые посты
  }, [filter.sort, posts]);
  /* функция отрабатывает только после изменения зависимостей, у нас это selectedSort - выбранная категория сортировки,
  а posts - это наши посты */

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

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
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchPosts.length !== 0 ? (
        <PostList
          title="Список постов"
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
