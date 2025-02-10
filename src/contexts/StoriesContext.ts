import React from "react";

export interface StoriesContextState {
  stories: any[];
  loading: boolean;
  error: string | null;
}

export const StoriesContext = React.createContext<StoriesContextState>({
  stories: [],
  loading: false,
  error: null,
});