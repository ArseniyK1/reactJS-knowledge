import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((firstValue, nextValue) =>
        firstValue[sort].localeCompare(nextValue[sort])
      );
    } /* создаем копию массива с нашими постами (потому что метод sort мутирует массив и возвращает новый массив)
             и с помощью функции localeCompare, предназначенной для сортировки строк, возвращаем отсортированный массив */
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
