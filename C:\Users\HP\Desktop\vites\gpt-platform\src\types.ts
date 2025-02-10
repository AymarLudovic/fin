interface AppState {
  videos: Video[];
  currentUser: User;
  isAuthenticated: boolean;
}

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  bio: string;
  followers: User[];
  following: User[];
  createdAt: Date;
  updatedAt: Date;
}

interface Comment {
  id: string;
  text: string;
  user: User;
  videoId: string;
  createdAt: Date;
  updatedAt: Date;
}