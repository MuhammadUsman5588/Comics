import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const DiscoverScreen = () => {
  const navigation = useNavigation();


  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Main Image */}
      <Image source={require('../../assets/images/mainimage.png')} style={styles.image} />

      <Image source={require('../../assets/images/d1.png')} style={styles.componentimage} />

      <Image source={require('../../assets/images/d2.png')} style={styles.imageOverlay} />


      <Text style={styles.welcomeText}>
        <Text style={styles.mainTitle}>Super Vet : The First Show {"\n"}</Text>
        <Text style={styles.subtitle}>9 Books</Text>
      </Text>
      <View style={styles.divider}></View>


      <Image source={require('../../assets/images/d2.png')} style={styles.imageOverlay1} />
      <Text style={styles.welcomeText1}>
        <Text style={styles.mainTitle1}>Super Vet : The First Show {"\n"}</Text>
        <Text style={styles.subtitle1}>9 Books</Text>
      </Text>
      <View style={styles.divider1}></View>




      <Image source={require('../../assets/images/d2.png')} style={styles.imageOverlay2} />
      <Text style={styles.welcomeText2}>
        <Text style={styles.mainTitle2}>Super Vet : The First Show {"\n"}</Text>
        <Text style={styles.subtitle2}>9 Books</Text>
      </Text>
      <View style={styles.divider2}></View>












    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  componentimage: {
    position: 'absolute',
    top: '-42%',
    left: '0%',
    width: '100%',
    height: height * 0.99,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
imageOverlay: {
    position: 'absolute',
    top: '3%',
    left: '10%',
    width: '40%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText: {
  fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 90 }, { translateY: -155 }],
  },
  mainTitle: {
    fontWeight: '700',
    fontSize: 12,
  },
  subtitle: {
    fontWeight: '300',
    fontSize: 10,
    color: '#ACABAB',
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '37%',
  },

  ////

  imageOverlay1: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    width: '40%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText1: {

    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 90 }, { translateY: 3 }],
  },
  mainTitle1: {
    fontWeight: '700',
    fontSize: 12,
  },
  subtitle1: {
    fontWeight: '300',
    fontSize: 10,
    color: '#ACABAB',
  },
  divider1: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '59%',
  },

////

imageOverlay2: {
  position: 'absolute',
  top: '48%',
  left: '10%',
  width: '40%',
  height: height * 0.5,
  resizeMode: 'contain',
},
welcomeText2: {
fontWeight: '700',
  color: '#ffffff',
  position: 'absolute',
  lineHeight: 14,
  transform: [{ translateX: 90 }, { translateY: 175 }],
},
mainTitle2: {
  fontWeight: '700',
  fontSize: 12,
},
subtitle2: {
  fontWeight: '300',
  fontSize: 10,
  color: '#ACABAB',
},
divider2: {
  width: '100%',
  height: 0.5,
  backgroundColor: '#6F7071',
  marginVertical: 20,
  position: 'absolute',
  top: '82%',
},
});

export default DiscoverScreen; 