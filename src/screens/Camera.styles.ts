

```javascript
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facingButton: {
    position: 'absolute',
    top: moderateScale(10),
    left: moderateScale(10),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flashButton: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(200),
    width: moderateScale(200),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    borderRadius: moderateScale(10),
  },
  picture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: moderateScale(200),
    width: moderateScale(200),
  },
  text: {
    color: '#fff',
    fontSize: moderateScale(16),
  },
});

export default styles;
```

