

```javascript
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    padding: Spacing.large,
  },
  title: {
    ...Typography.header2,
    marginBottom: Spacing.medium,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.medium,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  settingItemText: {
    flex: 1,
    ...Typography.body,
  },
  settingItemIcon: {
    marginLeft: Spacing.small,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginRight: Spacing.small,
    ...Typography.body,
  },
});

export default styles;
```

