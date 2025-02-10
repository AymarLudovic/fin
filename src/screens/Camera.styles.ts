

```jsx
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cameraPreview: {
    flex: 1,
  },
  captureButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 20,
  },

  // Colors
  primary: "#000",
  secondary: "#fff",
  accent: "#f00",

  // Typography
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#666",
  },

  // Spacing
  margin: 20,
  padding: 10,
});

export default styles;
```

