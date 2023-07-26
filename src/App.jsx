import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import styles from "./App.module.css";

import { faker } from "@faker-js/faker";

import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter/PostFilter";
import MyModal from "./UI/MyModal/MyModal";
import MyButton from "./UI/button/MyButton";

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
  const [visible, setVisible] = useState(false);

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
    setVisible(false);
  };

  const removePostHandler = (post) => {
    setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
  };

  return (
    <div className={styles.container}>
      <header>
        <MyButton onClick={() => setVisible(true)}>Создать пост</MyButton>
      </header>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={onCreateHandler} />
      </MyModal>

      <hr className={styles.razdelitelnaya} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        title="Список постов"
        posts={sortedAndSearchPosts}
        onRemove={removePostHandler}
      />
    </div>
  );
}

export default App;
