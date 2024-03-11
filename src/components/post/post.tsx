import { FC } from "react";
import { IPostProps } from "../../types/types";
import styles from "./post.module.scss";
import { Link } from "react-router-dom";

export const Post: FC<IPostProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        <p className={styles.title}>{post.title}</p>
      </div>
    </Link>
  );
};
