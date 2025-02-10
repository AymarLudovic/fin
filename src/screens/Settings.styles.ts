

```javascript
import { StyleSheet } from 'react-native';
import { colors, typography } from './theme';

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sectionHeader: {
    ...typography.header6,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingItemLabel: {
    ...typography.body3,
    color: colors.text,
  },
  settingItemValue: {
    ...typography.body3,
    color: colors.text,
  },
  toggleSwitch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  spacingVertical: {
    marginVertical: 12,
  },
});
```

