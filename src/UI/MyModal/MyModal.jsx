import { useEffect } from "react";
import styles from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];

  // Обработчик события для нажатия клавиши "Escape"
  const handleEscapeKeyPress = (event) => {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };

  // Эффект для добавления обработчика события при появлении модального окна
  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleEscapeKeyPress);
    }

    // Очистка обработчика события при закрытии модального окна или при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [visible]);

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
