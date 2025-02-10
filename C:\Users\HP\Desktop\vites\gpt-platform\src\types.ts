interface AppState {
  clone: Clone;
  view: View;
}

interface Clone {
  id: string;
  name: string;
  description: string;
  type: CloneType;
  features: CloneFeature[];
  pages: ClonePage[];
}

enum CloneType {
  TikTok,
  Instagram,
  Snapchat,
  YouTubeShorts
}

interface CloneFeature {
  name: string;
  description: string;
  icon: string;
}

interface ClonePage {
  name: string;
  description: string;
  components: CloneComponent[];
}

interface CloneComponent {
  type: ComponentType;
  properties: ComponentProperties;
}

enum ComponentType {
  Button,
  Text,
  Image,
  Video
}

interface ComponentProperties {
  text: string;
  imageUrl: string;
  videoUrl: string;
}

interface View {
  currentPage: ClonePage;
  currentComponent: CloneComponent;
}

export type {
  AppState,
  Clone,
  CloneFeature,
  ClonePage,
  CloneComponent,
  ComponentType,
  ComponentProperties,
  View
};