## stephengrider-reactnative-advanced-3-cloudfunctions-auth-jwt

### dependency: backend server

- https://github.com/swagfinger/stephengrider-reactnative-advanced-2-OTP-authentication.git

### Installation

- React-native-elements - https://reactnativeelements.com/docs
- Firebase

```cmd
npm install @rneui/themed @rneui/base
npm i --save firebase
```

## authenticated users / createUser

- on firebase, users already created are under google cloud console -> Authentication
- user needs to enter phone with [+coutrycode] syntax
- username is stored in firebase realtime database with '+' before the number
- note you have to delete the user already in the cloud if you want to register again.

## firebase

- you need to install firebase for the react native side
- console.firebase.google.com -> overview -> <add app+> button -> web -> add firebase to your web ap
- copy "your web apps firebase configuration"
- config code

```js
//app.js
import firebase from 'firebase';

export default function App() {
  useEffect(() => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: 'ENTER DATA',
      authDomain: 'ENTER DATA',
      databaseURL: 'ENTER DATA',
      projectId: 'ENTER DATA',
      storageBucket: 'ENTER DATA',
      messagingSenderId: 'ENTER DATA',
      appId: 'ENTER DATA',
      measurementId: 'ENTER DATA'
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);
}
```

### USING firebase - signin form to authenticate user

- then use firebase to sign into application firebase.auth().signInWithCustomToken(TOKEN);

```js
import firebase from 'firebase';

const handleSubmit = async () => {
  ...
  firebase.auth().signInWithCustomToken(data.token);
};
```
