

```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 200,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
  },

  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },

  bioText: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  statsItem: {
    alignItems: 'center',
  },

  statsCountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  statsLabelText: {
    fontSize: 14,
    color: '#888',
  },

  postsContainer: {
    marginTop: 20,
  },

  postItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },

  postTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  postBodyText: {
    fontSize: 16,
    marginTop: 10,
  },

  postDateText: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
});

export default styles;
```

