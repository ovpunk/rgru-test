import { FC } from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.logo}>RG.RU</div>
      </div>
    </header>
  );
};
