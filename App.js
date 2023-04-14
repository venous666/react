import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput> email</TextInput>
      <TextInput> password</TextInput>
      <TextInput> sign in</TextInput>
      <StatusBar style="auto" />
      <Text style={styles.paragraph2}> Forgot your password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph2: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
