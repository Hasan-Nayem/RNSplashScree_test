import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native';

export default function SplashScreen({ navigation }) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('HomeScreen');
    // }, 2000);
    // fetch('https://restcountries.com/v3.1/all')
    //   .then(res => res.json())
    //   .then(data => {
    //     setCountry(data)
    //     navigation.navigate('HomeScreen', {
    //       countryData: country,
    //     })
    //   });

    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountry(data);
      } catch (e) {
        console.log('error occurred - ',e)
      }
    }
    fetchData();

  }, []);
  useEffect(() => {
    // If the country state is not null, navigate to the home screen and pass the data
    if (country) {
      navigation.navigate('HomeScreen', {
        countryData: country,
      });
    }
  }, [country]);

  return (
    <View style={styles.container}>
      <LottieView source={require('./assets/animations/welcome.json')} style={styles.animation} autoPlay loop />
      <Text style={styles.branding}>CarHub</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 400,
    width: 400,
  },
  branding: {
    fontFamily: 'DMSans-Bold',
    fontSize: 40,
    color: '#4a4a6e',
  }
})