import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
