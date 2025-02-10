interface AppState {
  user: User;
  posts: Post[];
  notifications: Notification[];
  messages: Message[];
}

interface User {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  bio: string;
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

interface Post {
  id: string;
  userId: string;
  timestamp: number;
  caption: string;
  imageUrl: string;
  likesCount: number;
  commentsCount: number;
}

interface Notification {
  id: string;
  type: string;
  senderId: string;
  receiverId: string;
  timestamp: number;
  read: boolean;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  timestamp: number;
  text: string;
  read: boolean;
}