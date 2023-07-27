import styles from "./PostFilter.module.css";
import { Button, TextField } from "@mui/material";
import MySelect from "../../UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <input
        placeholder="Поиск..."
        className={styles.query}
        label="Поиск..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <br />
      <br />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </>
  );
};

export default PostFilter;
