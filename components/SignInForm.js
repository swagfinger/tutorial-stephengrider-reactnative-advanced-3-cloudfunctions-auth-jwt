import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import axios from 'axios';

const ROOT_URL =
  'https://us-central1-sgrider-reactnative-advanced.cloudfunctions.net';

const SignInForm = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState();

  const handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: phone,
        code: code
      });
      console.table(data); //data will have a key called token
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Input
          label="Enter Phone number"
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <Input
          label="Enter code"
          value={code}
          onChangeText={(code) => setCode(code)}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
export default SignInForm;
