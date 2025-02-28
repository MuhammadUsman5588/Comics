import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window');

const Notification = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleBackPress = () => {
    navigation.navigate('Toptab');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Main Image */}
      <Image source={require('../../assets/images/mainimage.png')} style={styles.image} />

      {/* Rectangle Image */}
      <Image source={require('../../assets/images/rectangle.png')} style={styles.rectangleimage} />

      {/* Header with Back Button, Text, and Search */}
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <Image
              source={require('../../assets/images/back.png')}
              style={styles.backImage}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBackPress} style={styles.backTextContainer}>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>

        {/* Search Container */}
        <View style={styles.searchContainer}>
          <TextInput 
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search..."
            placeholderTextColor="#fff"
            style={styles.searchInput}
          />
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.searchImage} 
          />
        </View>
      </View>

      <Image source={require('../../assets/images/n1.png')} style={styles.imageOverlay} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText}>
        <Text style={styles.mainTitle}>Sara Williams</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText}>
        <Text style={styles.publishedLabel}>Lorem ipsum dolor sit amet, consectetur  {"\n"}</Text>
        <Text style={styles.publishedDate}>adipiscing elit. Ante quis commodo duis velit{"\n"}</Text>
        <Text style={styles.writerLabel}>maecenas nibh.  </Text>
        <Text style={styles.readMore}>Read More{"\n"}</Text>
        <Text style={styles.writerName}>1m ago.</Text>
      </Text>
      <Text style={styles.dateName}>Monday 11:30 AM - Jul 2022</Text>

      {/* Red Circle with Number */}
      <View style={styles.redCircle}>
        <Text style={styles.redCircleText}>2</Text>
      </View>

      {/* Thin Line Divider */}
      <View style={styles.divider}></View>

      {/* Second Notification */}
      <Image source={require('../../assets/images/n2.png')} style={styles.imageOverlay1} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText1}>
        <Text style={styles.mainTitle1}>Patrik Dj</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText1}>
        <Text style={styles.publishedLabel1}>Lorem ipsum dolor sit amet, consectetur  {"\n"}</Text>
        <Text style={styles.publishedDate1}>adipiscing elit. Ante quis commodo duis velit{"\n"}</Text>
        <Text style={styles.writerLabel1}>maecenas nibh.  </Text>
        <Text style={styles.readMore1}>Read More{"\n"}</Text>
        <Text style={styles.writerName1}>1m ago.</Text>
      </Text>
      <Text style={styles.dateName1}>Monday 11:30 AM - Jul 2022</Text>

      {/* Red Circle with Number */}
      <View style={styles.redCircle1}>
        <Text style={styles.redCircleText1}>2</Text>
      </View>

      {/* Thin Line Divider */}
      <View style={styles.divider1}></View>

      {/* Third Notification */}
      <Image source={require('../../assets/images/n3.png')} style={styles.imageOverlay2} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText2}>
        <Text style={styles.mainTitle2}>David</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText2}>
        <Text style={styles.publishedLabel2}>Lorem ipsum dolor sit amet, consectetur  {"\n"}</Text>
        <Text style={styles.publishedDate2}>adipiscing elit. Ante quis commodo duis velit{"\n"}</Text>
        <Text style={styles.writerLabel2}>maecenas nibh.  </Text>
        <Text style={styles.readMore2}>Read More{"\n"}</Text>
        <Text style={styles.writerName2}>1m ago.</Text>
      </Text>
      <Text style={styles.dateName2}>Monday 11:30 AM - Jul 2022</Text>

      {/* Red Circle with Number */}
      <View style={styles.redCircle2}>
        <Text style={styles.redCircleText2}>2</Text>
      </View>

      {/* Thin Line Divider */}
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
  rectangleimage: {
    position: 'absolute',
    top: '-44%',
    left: '0%',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    zIndex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: '5%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    zIndex: 2,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  backImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  backTextContainer: {
    justifyContent: 'center',
  },
  backText: {
    fontSize: 12,
    color: '#fff',
  },

  searchContainer: {
    position: 'relative',
    width: 180,
  },

  searchInput: {
    flex: 1,
    fontSize: 12,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    paddingVertical: 0,
    paddingLeft: 10,
    height: 30,
  },

  searchImage: {
    position: 'absolute',
    left: 150,
    top: '60%',
    transform: [{ translateY: -12 }],
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  imageOverlay: {
    position: 'absolute',
    top: '-2%',
    left: '7%',
    width: '20%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: -30 }, { translateY: -230 }],
  },
  mainTitle: {
    fontWeight: '700',
    fontSize: 12.24,
  },

  publishedText: {
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 40}, { translateY: -190 }],
  },
  publishedLabel: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  publishedDate: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  writerLabel: {
    fontWeight: '700',
    fontSize: 8.52,
    color: '#B5B4B4',
  },
  writerName: {
    fontWeight: '300',
    fontSize: 8.52,
    color: '#BEFF9F',
  },
  dateName:{
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 100 }, { translateY: -160 }],
  },
  readMore: {
    color: 'red',
    fontWeight: '700',
    fontSize: 8.52,
  },
  redCircle: {
    position: 'absolute',
    top: '18%',
    right: '6%',
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#F84135',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  redCircleText: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '30%',
  },
  imageOverlay1: {
    position: 'absolute',
    top: '17%',
    left: '7%',
    width: '20%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText1: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: -42 }, { translateY: -90 }],
  },
  mainTitle1: {
    fontWeight: '700',
    fontSize: 12.24,
  },

  publishedText1: {
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 40}, { translateY: -50 }],
  },
  publishedLabel1: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  publishedDate1: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  writerLabel1: {
    fontWeight: '700',
    fontSize: 8.52,
    color: '#B5B4B4',
  },
  writerName1: {
    fontWeight: '300',
    fontSize: 8.52,
    color: '#BEFF9F',
  },
  dateName1:{
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 100 }, { translateY: -20 }],
  },
  readMore1: {
    color: 'red',
    fontWeight: '700',
    fontSize: 8.52,
  },
  redCircle1: {
    position: 'absolute',
    top: '37%',
    right: '6%',
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#F84135',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  redCircleText1: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  divider1: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '49%',
  },

  imageOverlay2: {
    position: 'absolute',
    top: '36%',
    left: '7%',
    width: '20%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText2: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: -48 }, { translateY: 52 }],
  },
  mainTitle2: {
    fontWeight: '700',
    fontSize: 12.24,
  },

  publishedText2: {
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 40}, { translateY: 92 }],
  },
  publishedLabel2: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  publishedDate2: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  writerLabel2: {
    fontWeight: '700',
    fontSize: 8.52,
    color: '#B5B4B4',
  },
  writerName2: {
    fontWeight: '300',
    fontSize: 8.52,
    color: '#BEFF9F',
  },
  dateName2:{
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 100 }, { translateY: 120 }],
  },
  readMore2: {
    color: 'red',
    fontWeight: '700',
    fontSize: 8.52,
  },
  redCircle2: {
    position: 'absolute',
    top: '56%',
    right: '6%',
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#F84135',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  redCircleText2: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  divider2: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '68%',
  },

});

export default Notification;
