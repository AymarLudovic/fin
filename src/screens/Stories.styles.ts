

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  storiesList: {
    flex: 1,
    padding: 16,
  },
  storyItem: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storyInfo: {
    marginLeft: 16,
  },
  storyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storyUsername: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
```

