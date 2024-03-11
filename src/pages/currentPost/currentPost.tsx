import { FC } from "react";
import styles from "./currentPost.module.scss";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { currentPostFetch } from "../../api/api";
import { IPost } from "../../types/types";
import { Loader } from "../../components/loader/loader";

export const CurrentPost: FC = () => {
  const { id } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["getPost", id],
    queryFn: async () => {
      const res = await currentPostFetch(Number(id));
      if (res.ok) {
        const response = await res.json();
        return response as IPost;
      }
      throw new Error("Failed fetch post");
    },
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <Link to="/" className={styles.back}>
        Назад
      </Link>
      <div className={styles.wrapper}>
        {post && (
          <div className={styles.post}>
            <h1>{post.title}</h1>

            <p>{post.body}</p>
          </div>
        )}
      </div>
    </>
  );
};
