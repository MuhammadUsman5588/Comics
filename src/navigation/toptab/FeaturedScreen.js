import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Dimensions, FlatList, ScrollView, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const FeaturedScreen = () => {
  const navigation = useNavigation();

  const componentImages = [
    require('../../assets/images/001.png'),
    require('../../assets/images/011.png'),
    require('../../assets/images/012.png'),
    require('../../assets/images/013.png'),
  ];

  const list1Images = [
    require('../../assets/images/02.png'),
    require('../../assets/images/03.png'),
    require('../../assets/images/04.png'),
    require('../../assets/images/05.png'),
  ];

  const list2Images = [
    { id: 'Dr.ivy sea queen', name: 'awais,qasim', text: '300-BUY', image: require('../../assets/images/07.png') },
    { id: 'dr.psycho vol 2', name: 'WASAAM QAZI,ZOHaIB', text: '300-BUY', image: require('../../assets/images/08.png') },
    { id: 'dr.steel shot vol 2', name: 'zohaib,Naumaan', text: '300-BUY', image: require('../../assets/images/09.png') },
    { id: 'dR.wolf vol 2 ', name: 'WASAAM QAZI,ZOHaIB', text: '300-BUY', image: require('../../assets/images/10.png') },
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

      {/* FlatList for the first set of list images */}
      <View style={styles.listContainer}>
        <FlatList
          data={list1Images}
          renderItem={({ item }) => (
            <Image source={item} style={styles.list1image} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list1ContentContainer}
          ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
        />
      </View>

      {/* Super Image */}
      <Image source={require('../../assets/images/06.png')} style={styles.superimage} />

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
          contentContainerStyle={styles.list2ContentContainer}  // Adjusted container style to fill space
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}  // Adjust separator if needed
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
  listContainer: {
    position: 'absolute',
    top: '25%',
    left: '3%',
    width: '94%',
    alignItems: 'center',
  },
  list1image: {
    width: width * 0.20,
    height: height * 0.2,
    marginRight: 0,
  },
  list1ContentContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  superimage: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    top: '71%',
    left: '12%',
    resizeMode: 'contain',
    transform: [{ translateX: -width * 0.125 }, { translateY: -height * 0.125 }],
  },
  newlistContainer: {
    position: 'absolute',
    top: '66%',
    left: '3%',
    width: '100%',  // Ensuring it takes up the full width
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',  // Allow wrapping of items if they overflow
  },
  list2ItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -13 ,  // Remove margin to avoid extra space
  },
  list2image: {
    width: width * 0.25,  // Adjust width slightly to ensure better fit
    height: height * 0.2,
    marginRight: 5,  // Small margin between images
  },
  list2ContentContainer: {
    flexDirection: 'row',  // Ensures images are in a row
    flexWrap: 'wrap',      // Allows items to wrap to the next line if needed
    justifyContent: 'flex-start',  // Aligns items to the left side
    paddingRight: 0,  // Ensures no extra space at the right
  },
  imageText: {
    marginTop: 0,
    fontSize: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default FeaturedScreen;
