import React, { createContext, useState } from 'react';
import { Post } from './types';

export const PostsContext = createContext<Post[]>([]);

export const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  return <PostsContext.Provider value={[posts, setPosts]}>{children}</PostsContext.Provider>;
};