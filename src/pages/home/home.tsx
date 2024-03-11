import { FC, useState } from "react";
import { useQuery } from "react-query";
import { postsFetch } from "../../api/api";
import { IPost } from "../../types/types";
import { Post } from "../../components/post/post";
import styles from "./home.module.scss";
import { Pagination } from "../../components/pagination/pagination";
import { Loader } from "../../components/loader/loader";

export const Home: FC = () => {
  const [offset, setOffset] = useState(0);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["getPosts"],
    queryFn: async () => {
      const res = await postsFetch();
      if (res.ok) {
        const response = await res.json();
        return response as IPost[];
      }
      throw new Error("Failed fetch posts");
    },
  });

  const countOfPostsPerPage = 10;
  const pagesCount = posts && posts.length / countOfPostsPerPage;
  const postOnThePage = posts?.slice(offset, offset + countOfPostsPerPage);

  if (isLoading) return <Loader />;

  return (
    <>
      <div className={styles.posts}>
        {postOnThePage?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        props={{
          pagesCount: pagesCount || 0,
          offset: offset,
          setOffset: setOffset,
          countOfPostsPerPage: countOfPostsPerPage,
        }}
      />
    </>
  );
};
