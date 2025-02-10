

```javascript
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 50,
    margin: 10,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#000000',
    borderRadius: 5,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultsContainer: {
    flex: 1,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  resultItemTitle: {
    fontSize: 18,
    color: '#000000',
  },
  resultItemDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default styles;
```

