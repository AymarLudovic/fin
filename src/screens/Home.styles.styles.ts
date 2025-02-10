

```javascript
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  // Colors
  primaryText: {
    color: '#000',
  },
  secondaryText: {
    color: '#666',
  },
  accentColor: {
    color: '#ff0000',
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
    fontWeight: 'normal',
  },

  // Spacing
  spacingSmall: {
    margin: 10,
  },
  spacingMedium: {
    margin: 20,
  },
  spacingLarge: {
    margin: 30,
  },
});

export default HomeStyles;
```

