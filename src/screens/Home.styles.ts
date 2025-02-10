

```typescript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /**
   * Layout
   */
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  /**
   * Colors
   */
  primary: {
    color: "#000",
  },
  secondary: {
    color: "#666",
  },
  success: {
    color: "#28a745",
  },
  warning: {
    color: "#ffc107",
  },
  error: {
    color: "#dc3545",
  },

  /**
   * Typography
   */
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "normal",
  },
  body: {
    fontSize: 16,
    fontWeight: "normal",
  },

  /**
   * Spacing
   */
  margin: {
    margin: 16,
  },
  padding: {
    padding: 16,
  },
});

export default styles;
```

