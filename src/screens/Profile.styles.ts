

```javascript
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FC',
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F2F33',
  },

  // Profile Section
  profileSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 }, // iOS shadow
    shadowOpacity: 0.27, // iOS shadow
    shadowRadius: 4.65, // iOS shadow
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2F2F33',
    marginTop: 10,
  },
  profileRole: {
    fontSize: 16,
    color: '#969699',
    marginTop: 5,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  profileInfoItem: {
    alignItems: 'center',
  },
  profileInfoNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F33',
  },
  profileInfoLabel: {
    fontSize: 14,
    color: '#969699',
    marginTop: 5,
  },

  // Description Section
  descriptionSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F33',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#696969',
    lineHeight: 22,
  },

  // Skills Section
  skillsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  skillsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F33',
    marginBottom: 10,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    backgroundColor: '#F5F6FA',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  skillText: {
    fontSize: 14,
    color: '#696969',
  },

  // Contact Section
  contactSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F33',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contactInfoItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contactInfoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactInfoLabel: {
    fontSize: 16,
    color: '#696969',
  },

  // Footer
  footer: {
    backgroundColor: '#F6F9FC',
    padding: 20,
  },
});

export default styles;
```

