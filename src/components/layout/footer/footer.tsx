import { FC } from "react";
import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.name}>Вячеслав Овчинников</div>
      </div>
    </footer>
  );
};
