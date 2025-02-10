

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  // Colors
  primary: {
    color: '#000',
  },
  secondary: {
    color: '#666',
  },
  // Typography
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  // Spacing
  margin: {
    marginBottom: 10,
  },
});

export default styles;
```

