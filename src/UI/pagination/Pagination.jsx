import { getPagesArray } from "../../utils/pages";
import MyButton from "../button/MyButton";
import styles from "./Paginaton.module.css";

const Paginaton = ({ totalPages, changePage, page }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={styles.pagination}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? styles.page__current : ""}
        >
          <MyButton>{p}</MyButton>
        </span>
      ))}
    </div>
  );
};

export default Paginaton;
