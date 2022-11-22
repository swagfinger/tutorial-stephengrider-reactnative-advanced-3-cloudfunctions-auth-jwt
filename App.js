import React, { useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default function App() {
  //called at start
  useEffect(() => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'AIzaSyDfI3l9Zg9SweW9rbjf9WTda3S6VerdPgM',
      authDomain: 'sgrider-reactnative-advanced.firebaseapp.com',
      databaseURL:
        'https://sgrider-reactnative-advanced-default-rtdb.firebaseio.com',
      projectId: 'sgrider-reactnative-advanced',
      storageBucket: 'sgrider-reactnative-advanced.appspot.com',
      messagingSenderId: '137479108168',
      appId: '1:137479108168:web:d396311bd00e89e70b8a7d',
      measurementId: 'G-NJLZWVD1NV'
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
});
