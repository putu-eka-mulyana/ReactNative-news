import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LGPanjang} from '../../assets';
const Splash = ({navigation}) => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#272121');
    setTimeout(() => {
      navigation.replace('Webview');
    }, 3000);
  });
  return (
    <LinearGradient
      colors={['#272121', '#4f4c49', '#837e7e']}
      style={styles.linearGradient}>
      <LGPanjang width={300} />
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  linearGradient: {
    backgroundColor: '#636161',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
  },
});
