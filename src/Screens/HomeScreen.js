import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({ route, navigation }) {
    const countries = route.params;
    console.log('all country', (countries.countryData))
    console.log(typeof (countries.countryData))
    return (
        <ScrollView>
            <View>
                {/* {
        countries.countryData.forEach(element => {
            <Text>element.name.official</Text>
        })
     } */}
                {
                    countries.countryData.map(country => <View style={{ padding: 20 }} key={country.name.common}>
                        <Text style={styles.header}>{country.name.common}</Text>
                        <Text style={styles.data} >Region :  {country.region}</Text>
                        <Text style={styles.data} >Total Population :  {country.population}</Text>
                        <Image
                            style={{
                                width: 150,
                                height: 150,
                                margin: 10,
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                alignSelf: 'center',
                            }}
                            source={{
                                uri: country.flags.png,
                            }}
                        />
                    </View>)
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'DMSans-Bold',
        marginBottom: 15
    },
    data: {
        fontWeight: 'bold',
        fontSize: 15,
        fontFamily: 'DMSans-Italic',
    }
})