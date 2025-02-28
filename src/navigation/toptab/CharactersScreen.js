import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, ScrollView, Text,TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const CharactersScreen = () => {
  const navigation = useNavigation();

  const componentImages = [
    require('../../assets/images/001.png'),
    require('../../assets/images/011.png'),
    require('../../assets/images/012.png'),
    require('../../assets/images/013.png'),
  ];
  const list1Images = [
    { name: 'BOGGY VET',  image: require('../../assets/images/c1.png') },
    {  name: 'DR.IVY',  image: require('../../assets/images/c2.png') },
    {  name: 'DR.X ', image: require('../../assets/images/c3.png') },
   
  ];
  const list2Images = [
    { name: 'TEAM 2',  image: require('../../assets/images/c6.png') },
    {  name: 'TEAM 3',  image: require('../../assets/images/c4.png') },
    {  name: 'TEAM 4 ', image: require('../../assets/images/c5.png') },
    {  name: 'TEAM 5 ', image: require('../../assets/images/c7.png') },
   
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Main Image */}
      <Image source={require('../../assets/images/mainimage.png')} style={styles.image} />
      
      {/* FlatList for component images */}
      <View style={styles.componentimageContainer}>
        <FlatList
          data={componentImages}
          renderItem={({ item }) => (
            <Image source={item} style={styles.componentimage} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled  
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}  
        />
      </View>
    

      <LinearGradient
        colors={['#00000000', '#FFA800']}  // Transparent to orange gradient (left to right)
        start={{ x: 1, y: 1 }}  // Gradient starts on the left (x: 0)
        end={{ x: 0, y: 0 }}    // Gradient ends on the right (x: 1)
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>FEATURED CHARACTERS</Text>
      </LinearGradient>
    
      <View style={styles.listContainer}>
        <FlatList
          data={list1Images}
          renderItem={({ item }) => (
            <View style={styles.list1ItemContainer}>
              <Image source={item.image} style={styles.list1image} />
              
              <Text style={styles.imageText}>{item.name}</Text>
              
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
        />
      </View>

      <LinearGradient
        colors={['#00000000', '#FFA800']}  // Transparent to orange gradient (left to right)
        start={{ x: 1, y: 1 }}  // Gradient starts on the left (x: 0)
        end={{ x: 0, y: 0 }}    // Gradient ends on the right (x: 1)
        style={styles.linearGradient1}>
        <Text style={styles.buttonText1}>TEAM LIST</Text>
        <TouchableOpacity onPress={'handleSeeAllPress'}>
        <Text style={styles.seeAllText}>SEE ALL</Text>
        </TouchableOpacity>
      </LinearGradient>


    
      <View style={styles.newlistContainer}>
        <FlatList
          data={list2Images}
          renderItem={({ item }) => (
            <View style={styles.list2ItemContainer}>
              <Image source={item.image} style={styles.list2image} />
              
              <Text style={styles.imageText}>{item.name}</Text>
              
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
        />
      </View>
       
      <LinearGradient
        colors={['#00000000', '#FFA800']}  // Transparent to orange gradient (left to right)
        start={{ x: 1, y: 1 }}  // Gradient starts on the left (x: 0)
        end={{ x: 0, y: 0 }}    // Gradient ends on the right (x: 1)
        style={styles.linearGradient2}>
        <Text style={styles.buttonText2}>VILLAINS</Text>
        <TouchableOpacity onPress={'handleSeeAllPress'}>
        <Text style={styles.seeAllText}>SEE ALL</Text>
        </TouchableOpacity>
      </LinearGradient>



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,  // Allows the ScrollView content to grow
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  componentimageContainer: {
    position: 'absolute',
    top: '-38%',
    left: '0%',
    width: '100%',
    height: height * 0.99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentimage: {
    width: width, 
    height: '100%',
    resizeMode: 'contain',
    marginRight: 0,  
  },
  linearGradient: {
    paddingLeft: 5,
    paddingRight: 95,
    borderRadius: 0,
    position: 'absolute',
    top: '27%',
    left: '0%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',  
    height: '5%', 
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    color: '#ffffff',
    marginRight:'50%',
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
    width: width * 0.30,  
    height: height * 0.18, 
    marginHorizontal: 2,  
  },
  list1ItemContainer: {
    alignItems: 'center',  
  },
  imageText: {
    marginTop: 5, 
    fontSize: 10, 
    fontWeight:'700',
    textAlign: 'center',
    color: '#fff',
  },
  linearGradient1: {
    paddingLeft: 5,
    paddingRight: 95,
    borderRadius: 0,
    position: 'absolute',
    top: '57%',
    left: '0%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',  
    height: '5%', 
  },
  buttonText1: {
    fontSize: 10,
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    color: '#ffffff',
    marginRight:'75%',
  },
  seeAllText: {
    position: 'absolute',
    left: 35,  // Position the text on the right side with a small margin
    top: -7,    // Position it at the top with a small margin
    fontSize: 10,
    color: '#FFFFFF',
  },
  newlistContainer:{
    position: 'absolute',
    width: '100%',
    marginTop: height * 0.25, 
    paddingHorizontal: 10, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    top: '40%',
  },
  list2ItemContainer:{
    alignItems: 'center',  
  },
  list2image:{
    width: width * 0.30,  
    height: height * 0.18, 
    marginHorizontal: 2,  
  },
  linearGradient2: {
    paddingLeft: 5,
    paddingRight: 95,
    borderRadius: 0,
    position: 'absolute',
    top: '90%',
    left: '0%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',  
    height: '5%', 
  },
  buttonText2: {
    fontSize: 10,
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    color: '#ffffff',
    marginRight:'75%',
  },
  seeAllText2: {
    position: 'absolute',
    left: 35,  // Position the text on the right side with a small margin
    top: -7,    // Position it at the top with a small margin
    fontSize: 10,
    color: '#FFFFFF',
  },
  
});

export default CharactersScreen;
