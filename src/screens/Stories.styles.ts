

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  storiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyItem: {
    marginHorizontal: 8,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 2,
  },
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  addStoryButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 8,
    backgroundColor: '#000',
    borderRadius: 50,
  },
});

export default styles;
```

