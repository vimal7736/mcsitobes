import { Text, View, StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <Text style={styles.link}>Go to home screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
