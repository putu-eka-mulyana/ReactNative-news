import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import {ILError} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Error = () => {
  return (
    <View style={styles.page}>
      <ILError width={200} height={250} />
      <Text style={styles.text}>Aplikasi Sedang Dalam Masalah</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://luwuktimes.com/')}>
        <Text style={styles.button}>Silahkan klik disini</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#c2a629',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
