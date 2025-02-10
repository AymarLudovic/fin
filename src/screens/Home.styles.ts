

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 50,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    padding: 20,
  },

  // Colors
  primary: '#2196f3',
  secondary: '#673ab7',
  accent: '#ff9800',
  error: '#d32f2f',
  success: '#4caf50',
  warning: '#ffc107',

  // Typography
  heading1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  heading3: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
  },

  // Spacing
  margin: 10,
  padding: 10,
});

export default styles;
```

This style sheet follows best practices by using logical names for styles, grouping related styles together, and using consistent spacing and indentation. It also includes styles for different text sizes and weights, making it easy to create a consistent and visually appealing UI.

