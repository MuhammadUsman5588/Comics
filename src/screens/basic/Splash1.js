import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Splash1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image
                source={require('../../assets/images/comp1.png')}
                style={styles.image}
            />

            <Image
                source={require('../../assets/images/logo1.png')}
                style={styles.logoimage}
            />

            <Text style={styles.welcometext}>
                <Text style={styles.welcomeText}>ENJOY YOUR READING{"\n"}</Text>
                <Text style={styles.supervetText}>WITH SUPERVET</Text>
            </Text>

            <Text style={styles.text}>Earn Passive Income By Just Reading Comics</Text>

            <Image
                source={require('../../assets/images/comp3.png')}
                style={styles.dotimage}
            />

            <TouchableOpacity onPress={() => navigation.navigate('Splash2')}>
                <Image
                    source={require('../../assets/images/skip.png')}
                    style={styles.skipimage}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '100%', 
        height: '100%', 
        //resizeMode: 'cover',  
    },
    logoimage: {
        position: 'absolute',
        width: '60%',
        height: '5%',
        top: '35%',
        left: '35%',
        transform: [{ translateX: -width * 0.125 }, { translateY: -height * 0.125 }],
    },
    welcometext: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        color: '#ffffff',
        position: 'absolute',
        lineHeight: 14,
        transform: [{ translateX: 10 }, { translateY: 10 }],
    },
    welcomeText: {
        fontWeight: '700',
        fontSize: 14,
    },
    supervetText: {
        fontWeight: '700',
        fontSize: 14,
        color: '#ffffff',
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#ffffff',
        position: 'absolute',
        transform: [{ translateX: 5 }, { translateY: 70 }],
    },

    dotimage: {
        position: 'absolute',
        height: '15%',
        width: '15%',
        resizeMode: 'contain',
        top: '63%',
        left: '50%',
        transform: [{ translateX: -width * 0.075 }, { translateY: height * 0.15 }],
    },
    skipimage: {
        position: 'absolute',
        width: 55,
        height: 55,
        resizeMode: 'contain',
        top: '25%',
        left: '40%',
        transform: [{ translateX: -width * 0.125 }, { translateY: -height * 0.1 }],
    },
});

export default Splash1;
