import React, { useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Toptab from '../toptab/Toptab';
// import Home from '../drawer/Home';




const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const [activeItem, setActiveItem] = useState('');

    // Function to handle navigation and set active item
    const handleNavigation = (screen, item) => {
        setActiveItem(item);
        navigation.navigate(screen);
    };

    return (
        <View style={styles.drawerContainer}>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image source={require('../../assets/images/dr2.png')} style={styles.profileImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Wasaam Qazi</Text>
                    <Text style={styles.joinDate}>Joined May 25, 2022</Text>
                </View>
            </View>

            {/* Main Drawer Image */}
            <Image source={require('../../assets/images/dr1.png')} style={styles.image} />

            {/* MetaMask Section */}
            <View style={styles.metaMaskContainer}>
                <Image source={require('../../assets/images/dr4.png')} style={styles.metaMaskImage} />
                <Text style={styles.metaMaskText}>Metamask</Text>
            </View>

            <View style={styles.orangeLine} />

            {/* Home Navigation Item */}
            <TouchableOpacity
                style={styles.HomeContainer}
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    source={require('../../assets/images/dr5.png')}
                    style={[styles.homeImage, activeItem === 'Home' && styles.activeImage]}
                />
                <Text style={[styles.homeText, activeItem === 'Home' && styles.activeText]}>Home</Text>
            </TouchableOpacity>

            <View style={styles.orangeLine1} />

            {/* My Comics Navigation Item */}
            <TouchableOpacity
                style={styles.ComicsContainer}
                onPress={() => navigation.navigate('Comics')}
            >
                <Image
                    source={require('../../assets/images/dr6.png')}
                    style={[styles.comicsImage, activeItem === 'Comics' && styles.activeImage]}
                />
                <Text style={[styles.comicsText, activeItem === 'Comics' && styles.activeText]}>My Comics</Text>
            </TouchableOpacity>

            <View style={styles.orangeLine2} />

            {/* My Tenants Navigation Item */}
            <TouchableOpacity
                style={styles.TanentsContainer}
                onPress={() => navigation.navigate('Tanents')}
            >
                <Image
                    source={require('../../assets/images/dr7.png')}
                    style={[styles.tanentsImage, activeItem === 'Tanents' && styles.activeImage]}
                />
                <Text style={[styles.tanentsText, activeItem === 'Tanents' && styles.activeText]}>My Tenants</Text>
            </TouchableOpacity>

            <View style={styles.orangeLine3} />

            {/* Rewards Section */}
            <View style={styles.RewardsContainer}>
                <Image source={require('../../assets/images/dr8.png')} style={styles.rewardsImage} />
                <Text style={styles.rewardsText}>Svet Rewards</Text>
            </View>

            <View style={styles.orangeLine4} />

            {/* Books Navigation Item */}
            <TouchableOpacity
                style={styles.BooksContainer}
                onPress={() => navigation.navigate('Books')}
            >
                <Image
                    source={require('../../assets/images/dr9.png')}
                    style={[styles.booksImage, activeItem === 'Books' && styles.activeImage]}
                />
                <Text style={[styles.booksText, activeItem === 'Books' && styles.activeText]}>Archived Book</Text>
            </TouchableOpacity>

            <View style={styles.orangeLine5} />

            {/* WishList Navigation Item */}
            <TouchableOpacity
                style={styles.WishContainer}
                onPress={() => navigation.navigate('WishList')}
            >
                <Image
                    source={require('../../assets/images/dr10.png')}
                    style={[styles.wishImage, activeItem === 'WishList' && styles.activeImage]}
                />
                <Text style={[styles.wishText, activeItem === 'WishList' && styles.activeText]}>Wish List</Text>
            </TouchableOpacity>

            <View style={styles.orangeLine6} />

            {/* Stats Navigation Item */}
            <TouchableOpacity
                style={styles.StatsContainer}
                onPress={() => navigation.navigate('Stats')}
            >
                <Image
                    source={require('../../assets/images/dr11.png')}
                    style={[styles.statsImage, activeItem === 'Stats' && styles.activeImage]}
                />
                <Text style={[styles.statsText, activeItem === 'Stats' && styles.activeText]}>Stats</Text>
            </TouchableOpacity>

            <View style={styles.orangeLine7} />

            {/* About Section */}
            <View style={styles.AboutContainer}>
                <Text style={styles.aboutText}>About</Text>
            </View>

            <View style={styles.orangeLine8} />

            {props.children}

            {/* Bottom Drawer Image */}
            <Image source={require('../../assets/images/mainimage.png')} style={styles.image1} />
        </View>
    );
};

export default function Drawer1() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    width: 231,
                },
                headerShown: false, 
            }}
        >
            <Drawer.Screen name="Toptab" component={Toptab} />
            {/* <Drawer.Screen name ="Home" component={Home}/> */}
          
           

          
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 20,
        position: 'relative',

    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 20,
        zIndex: 15,
    },
    profileImage: {
        width: 50,
        height: 50,
    },
    textContainer: {
        marginLeft: 10,
        marginTop: 15,
    },
    name: {
        fontSize: 9.22,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    joinDate: {
        fontSize: 8.1,
        color: '#FFFFFF',
    },
    image: {
        width: '100%',
        height: 120,
        marginTop: '-39%',
    },
    metaMaskContainer: {
        position: 'absolute',
        top: '20%',
        left: '14%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    metaMaskImage: {
        width: 26.73,
        height: 25.05,
        resizeMode: 'contain',
    },
    metaMaskText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 30,
        fontWeight: '300',
    },
    image1: {
        width: '100%',
        height: '90%',
    },
    orangeLine: {
        position: 'absolute',
        top: '25%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    // Active Styles
    activeText: {
        color: '#FDBC17', // Orange color for active text
    },
    activeImage: {
        tintColor: '#FDBC17', // Orange color for active images
    },
    HomeContainer: {
        position: 'absolute',
        top: '27%',
        left: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    homeImage: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    homeText: {
        fontSize: 14,
        color: '#ffffff',
        marginLeft: 30,
        fontWeight: '500',
    },
    orangeLine1: {
        position: 'absolute',
        top: '32%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    ComicsContainer: {
        position: 'absolute',
        top: '34%',
        left: '-7%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    comicsImage: {
        width: 134,
        height: 28,
        resizeMode: 'contain',
    },
    comicsText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: -27,
        fontWeight: '300',
    },
    orangeLine2: {
        position: 'absolute',
        top: '39%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    TanentsContainer: {
        position: 'absolute',
        top: '41%',
        left: '14%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    tanentsImage: {
        width: 30.63,
        height: 24.88,
        resizeMode: 'contain',
    },
    tanentsText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 30,
        fontWeight: '300',
    },
    orangeLine3: {
        position: 'absolute',
        top: '46%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    RewardsContainer: {
        position: 'absolute',
        top: '48%',
        left: '16%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    rewardsImage: {
        width: 22.5,
        height: 22.5,
        resizeMode: 'contain',
    },
    rewardsText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 34,
        fontWeight: '300',
    },
    orangeLine4: {
        position: 'absolute',
        top: '53%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    BooksContainer: {
        position: 'absolute',
        top: '55%',
        left: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    booksImage: {
        width: 22.5,
        height: 22.5,
        resizeMode: 'contain',
    },
    booksText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 37,
        fontWeight: '300',
    },
    orangeLine5: {
        position: 'absolute',
        top: '60%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    WishContainer: {
        position: 'absolute',
        top: '62%',
        left: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    wishImage: {
        width: 22.5,
        height: 22.5,
        resizeMode: 'contain',
    },
    wishText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 37,
        fontWeight: '300',
    },
    orangeLine6: {
        position: 'absolute',
        top: '67%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    StatsContainer: {
        position: 'absolute',
        top: '69%',
        left: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    statsImage: {
        width: 22.5,
        height: 22.5,
        resizeMode: 'contain',
    },
    statsText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 37,
        fontWeight: '300',
    },
    orangeLine7: {
        position: 'absolute',
        top: '74%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
    AboutContainer: {
        position: 'absolute',
        top: '76%',
        left: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 20,
    },
    aboutText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginLeft: 60,
        fontWeight: '300',
    },
    orangeLine8: {
        position: 'absolute',
        top: '81%',
        left: '10%',
        width: '80%',
        height: 1,
        backgroundColor: '#FFA800',
        zIndex: 10,
    },
});
