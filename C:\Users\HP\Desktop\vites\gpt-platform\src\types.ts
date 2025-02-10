interface Post {
  id: string;
  author: User;
  content: string;
  images: string[];
  likes: number;
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  profilePicture: string;
  followers: User[];
  following: User[];
}

interface Comment {
  id: string;
  author: User;
  content: string;
  createdAt: string;
  updatedAt: string;
}