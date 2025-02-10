

```javascript
import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  // Layout Styles
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flex: 1,
    padding: 20,
  },

  // Color Styles
  primary: {
    color: '#000',
  },
  secondary: {
    color: '#ccc',
  },

  // Typography Styles
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  body: {
    fontSize: 14,
    fontWeight: 'normal',
  },

  // Spacing Styles
  margin: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  padding: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default HomeStyles;
```

