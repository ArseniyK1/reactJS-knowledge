import styles from "./PostFilter.module.css";
import { Button, TextField } from "@mui/material";
import MySelect from "../../UI/select/MySelect ";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <TextField
        className={styles.mInputs}
        id="outlined-basic"
        label="Поиск..."
        variant="outlined"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <br />
      <br />
      <MySelect
        className={styles.sort}
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "description", name: "По описанию" },
        ]}
      />
    </>
  );
};

export default PostFilter;
