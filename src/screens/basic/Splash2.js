import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    
      <Image
        source={require('../../assets/images/comp1.png')}
        style={styles.image}
      />

      
     

<Text style={styles.welcometext}>
  <Text style={styles.welcomeText}>GET YOUR VOLUMES{"\n"}</Text>
  <Text style={styles.supervetText}>FROM COMIC MARKETPLACES</Text>
</Text>




     
<Image
        source={require('../../assets/images/logo2.png')}
        style={styles.logoimage}
      />

<Text style={styles.boxtext}>Read Comics</Text>
     

    
      <Image
        source={require('../../assets/images/comp4.png')}
        style={styles.dotimage}
      />

      


      <TouchableOpacity onPress={() => navigation.navigate('Splash3')}>
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
    height: '60%', 
    top: '38%', 
    left: '35%', 
    resizeMode:'contain',
    transform: [{ translateX: -width * 0.125 }, { translateY: -height * 0.125 }], 
  },
  welcometext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 2 }, { translateY: -100 }],
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
  
  boxtext: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    transform: [{ translateX: -3 }, { translateY: 200 }],
    borderWidth: 1,
    borderColor: '#F62F2F',
    backgroundColor:'#F62F2F',
    padding: 15,
    borderRadius: 3,
    textAlign: 'center',
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

export default Splash;
