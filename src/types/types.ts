import { Dispatch, SetStateAction } from "react";

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface IPostProps {
  post: IPost;
}

export interface IPaginationProps {
  props: {
    pagesCount: number;
    offset: number;
    setOffset: Dispatch<SetStateAction<number>>;
    countOfPostsPerPage: number;
  };
}
