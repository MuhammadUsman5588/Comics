import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const SuperunlimitedScreen = () => {
  const navigation = useNavigation();


  const list1Images = [
    { id: '', name: '', text: '', image: require('../../assets/images/s2.png') },
    { id: 'STEEL SHOT-GIBRAN-WOLF', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s3.png') },
    { id: 'WOLF-IVY-PSYCHO', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s4.png') },
    { id: 'STEEL SHOT-GIBRAN-WOLF', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s5.png') },
    { id: 'WOLF-IVY-PSYCHO', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s6.png') },
    { id: 'WOLF-IVY-PSYCHO', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s7.png') },
  ];

  const list2Images = [
    { id: 'NINA-X-STEEL SHOT', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s6.png') },
    { id: 'X-VISION-STEEL SHOT', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s5.png') },
    { id: 'NINA-X-STEEL SHOT', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s2.png') },
    { id: 'X-VISION-STEEL SHOT', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s3.png') },
    { id: 'WOLF-IVY-PSYCHO', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s4.png') },
    { id: 'X-VISION-STEEL SHOT', name: 'AWAIS,QASIM', text: '1000-BUY', image: require('../../assets/images/s7.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Main Image */}
      <Image source={require('../../assets/images/mainimage.png')} style={styles.image} />

      <Image source={require('../../assets/images/s1.png')} style={styles.componentimage} />




     <LinearGradient
             colors={['#00000000', '#FFA800']}  // Transparent to orange gradient (left to right)
             start={{ x: 1, y: 1 }}  // Gradient starts on the left (x: 0)
             end={{ x: 0, y: 0 }}    // Gradient ends on the right (x: 1)
             style={styles.linearGradient}>
             <Text style={styles.buttonText}>NEW SUPER BUNDLE</Text>
             <TouchableOpacity onPress={'handleSeeAllPress'}>
             <Text style={styles.seeAllText}>SEE ALL</Text>
             </TouchableOpacity>
           </LinearGradient>




     

      {/* FlatList for the first set of list images */}
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={{ alignItems: 'center' }} 
          data={list1Images}
          renderItem={({ item, index }) => (
            <TouchableOpacity 
              onPress={() => item.image === require('../../assets/images/s2.png') ? navigation.navigate('SomeScreen') : null}
              disabled={item.image !== require('../../assets/images/s2.png')}
            >
              <View style={styles.imageItemContainer}>
                <Image source={item.image} style={styles.list1image} />
                <Text style={styles.imageText}>{item.id}</Text>
                <Text style={styles.imageText}>{item.name}</Text>
                <Text style={styles.imageText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}  
        />
      </View>

      {/* FlatList for the second set of list images */}
      <View style={styles.newlistContainer}>
        <FlatList
          data={list2Images}
          renderItem={({ item }) => (
            <View style={styles.list2ItemContainer}>
              <Image source={item.image} style={styles.list2image} />
              <Text style={styles.imageText}>{item.id}</Text>
              <Text style={styles.imageText}>{item.name}</Text>
              <Text style={styles.imageText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
        />
      </View>
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
    top: '-39%',
    left: '0%',
    width: '100%',
    height: height * 0.99,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 90,
    borderRadius: 0,
    position: 'absolute',
    top: '27%',
    left: '0%',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    margin: 10,
    color: '#ffffff',
  },
  seeAllText: {
    position: 'absolute',
    left: 270,  // Position the text on the right side with a small margin
    top: -22,    // Position it at the top with a small margin
    fontSize: 10,
    color: '#FFFFFF',
  },

  listContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: height * 0.25, 
    paddingHorizontal: 10, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    top: '8%',
  },
  list1image: {
    width: width * 0.34,  
    height: height * 0.22, 
    marginHorizontal: 2,  
  },
  imageItemContainer: {
    alignItems: 'center',  
  },

  imageText: {
    marginTop: 0, 
    fontSize: 10, 
    textAlign: 'center',
    color: '#fff',
  },

  newlistContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: height * 0.25, 
    paddingHorizontal: 10, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    top: '40%',
  },
  list2ItemContainer: {
    alignItems: 'center',
  },
  list2image: {
    width: width * 0.34,  
    height: height * 0.22, 
    marginHorizontal: 2,  
  },
});

export default SuperunlimitedScreen;
