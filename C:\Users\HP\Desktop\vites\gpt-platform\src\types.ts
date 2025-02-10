type Image = {
  id: string;
  url: string;
  caption: string;
  likes: number;
  comments: number;
  userId: string;
};

type User = {
  id: string;
  username: string;
  email: string;
  profileImage: string;
  bio: string;
  followers: number;
  following: number;
  images: Image[];
};

type FeedState = {
  images: Image[];
  loading: boolean;
  error: string | null;
};

type ProfileState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

type AppState = {
  feed: FeedState;
  profile: ProfileState;
};