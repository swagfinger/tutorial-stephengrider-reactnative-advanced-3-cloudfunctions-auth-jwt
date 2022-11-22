import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import axios from 'axios';

const ROOT_URL =
  'https://us-central1-sgrider-reactnative-advanced.cloudfunctions.net';

const SignUpForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, {
        phone: phone
      });

      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: phone
      });
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
export default SignUpForm;
