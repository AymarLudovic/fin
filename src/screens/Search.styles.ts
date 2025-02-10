

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    height: 48,
    margin: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 12,
  },
  resultsContainer: {
    flex: 1,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  resultItemText: {
    fontSize: 16,
  },
  resultItemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultItemIcon: {
    marginLeft: 8,
  },
});

export default styles;
```

