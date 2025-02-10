

```javascript
import { StyleSheet } from 'react-native';

const SearchStyles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Colors
  primary: '#212121',
  secondary: '#E0E0E0',
  accent: '#FF0000',

  // Typography
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
  },

  // Spacing
  margin: 16,
  padding: 16,
});

export default SearchStyles;
```

