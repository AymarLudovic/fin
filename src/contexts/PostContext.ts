import React, { createContext, useContext } from "react";

export const PostContext = createContext<Post[]>([]);

export const usePosts = () => useContext(PostContext);

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}