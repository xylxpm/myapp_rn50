import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAresView} from 'react-navigation';

const Banner = () => {
    <SafeAresView style={styles.bannerContainer} forceInset={{vertical:'never'}}>
        <View style={styles.banner}>
            <Image source={require('./assets/NavLogo.png')} style={styles.image} />
            <Text style={styles.title}>React Navigation Examples</Text>
        </View>
    </SafeAresView>
}
export default Banner;

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: '#673ab7',
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
        tintColor: '#fff',
        margin: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '200',
        color: '#fff',
        margin: 8,
    },
})


