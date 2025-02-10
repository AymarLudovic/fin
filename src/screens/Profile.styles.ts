

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1,
    padding: 20,
  },

  // Colors
  textPrimary: {
    color: '#000',
  },
  textSecondary: {
    color: '#777',
  },
  accentColor: {
    color: '#4CAF50',
  },

  // Typography
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 20,
  },

  // Spacing
  margin: {
    margin: 10,
  },
  padding: {
    padding: 10,
  },
});

export default styles;
```

