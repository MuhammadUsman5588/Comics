import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Animated, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeaturedScreen from './FeaturedScreen';
import CharactersScreen from './CharactersScreen';
import DiscoverScreen from './DiscoverScreen';
import PopularScreen from './PopularScreen';
import SuperunlimitedScreen from './SuperunlimitedScreen';


const Toptab = () => {
  const navigation = useNavigation();
  const [selectedScreen, setSelectedScreen] = useState('FeaturedScreen');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const linePosition = useRef(new Animated.Value(0)).current;

  // Screen names for the tabs
  const screenNames = [
    'FeaturedScreen',
    'SuperunlimitedScreen',
    'CharactersScreen',
    'PopularScreen',
    'DiscoverScreen'
  ];

  // Function to render the selected screen content
  const renderScreen = () => {
    switch (selectedScreen) {
      case 'FeaturedScreen':
        return <FeaturedScreen />;
      case 'SuperunlimitedScreen':
        return <SuperunlimitedScreen />;
      case 'CharactersScreen':
        return <CharactersScreen />;
      case 'PopularScreen':
        return <PopularScreen />;
      case 'DiscoverScreen':
        return <DiscoverScreen />;
      default:
        return <FeaturedScreen />;
    }
  };

  // Update the position of the bottom line based on selected tab
  useEffect(() => {
    Animated.spring(linePosition, {
      toValue: selectedIndex * 80, // 80 is the width of each button (adjust as needed)
      useNativeDriver: false,
    }).start();
  }, [selectedIndex]);

  const bottomLineWidth = screenNames.length * 80; // Calculate width dynamically

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Drawer1')}>
            <Image
              source={require('../../assets/images/windows.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/images/logo1.png')}
            style={styles.logoimage}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Download')}>
            <Image
              source={require('../../assets/images/download.png')}
              style={styles.downloadimage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image
              source={require('../../assets/images/notification.png')}
              style={styles.notificationimage}
            />
          </TouchableOpacity>
        </View>


        {/* Scrollable Navigation buttons - All tabs visible */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.navButtonContainer}
        >
          {screenNames.map((screen, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedScreen(screen);
                setSelectedIndex(index);
              }}
              style={[
                styles.navButton,
                {
                  borderBottomWidth: selectedIndex === index ? 2 : 0,
                  borderBottomColor: '#FDBC17', // Highlight bottom line for active tab
                },
              ]}
            >
              <Text
                style={[
                  styles.navText,
                  {
                    color: selectedIndex === index ? '#FDBC17' : '#fff', // Change color on selection
                  },
                ]}
              >
                {screen.replace('Screen', '').toUpperCase()} {/* Convert to uppercase */}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Render selected screen content */}
      <View style={styles.contentContainer}>
        {renderScreen()}
      </View>

    </View>


  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Toptab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  navBar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    paddingTop: 15,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 25,
    marginTop: 10,
  },
  logoimage: {
    width: 140,
    height: 50,
    marginLeft: 70,
    marginTop: 8,
  },
  downloadimage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 25,
    marginTop: 10,
  },
  notificationimage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 20,
    marginTop: 10,
  },
  navButtonContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    //marginBottom: 20,
    marginTop: 1,

  },
  navButton: {
    paddingHorizontal: 3,
    justifyContent: 'center',
    marginRight: 10,
    paddingBottom: 5, 
  },
  navText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
});
