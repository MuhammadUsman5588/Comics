import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Updated import for MaterialIcons
import { StyleSheet, View, Image, Dimensions, ScrollView, Text, TouchableOpacity, Modal, Animated, Easing } from 'react-native';

const { width, height } = Dimensions.get('window');

const PopularScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const handleBuyNowPress = () => {
    setModalVisible(true);
    fadeIn();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const handleCloseModal = () => {
    fadeOut();
  };

  const handleMetaMaskPress = () => {
    console.log('MetaMask connected');
    fadeOut();
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Main Image */}
      <Image source={require('../../assets/images/mainimage.png')} style={styles.image} />

      {/* Overlay Component Images */}
      <Image source={require('../../assets/images/p1.png')} style={styles.componentImage} />
      <Image source={require('../../assets/images/p2.png')} style={styles.imageOverlay} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText}>
        <Text style={styles.mainTitle}>Dr.X : {"\n"}</Text>
        <Text style={styles.subtitle}>The Out Sider (2022)</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText}>
        <Text style={styles.publishedLabel}>Published:{"\n"}</Text>
        <Text style={styles.publishedDate}>May 25,2022{"\n"}</Text>
        <Text style={styles.writerLabel}>Writer:{"\n"}</Text>
        <Text style={styles.writerName}>Wasaam Qazi, Zohaib</Text>
      </Text>

      {/* Rating Section */}
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Icon key={index} name="star" size={8} color="#F1C644" /> // Changed to MaterialIcons
        ))}
        <Text style={styles.ratingText}>(94)</Text>
      </View>

      {/* Price Section */}
      <Text style={styles.priceText}>500 SVET</Text>

      {/* Buy Now Button */}
      <TouchableOpacity onPress={handleBuyNowPress}>
        <Text style={styles.buyNowButton}>BUY NOW</Text>
      </TouchableOpacity>

      {/* Thin Line Divider */}
      <View style={styles.divider}></View>

      {/* Custom Modal for MetaMask connection */}
      {modalVisible && (
        <Animated.View style={[styles.modalOverlay, { opacity: fadeAnim }]}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>CONNECT METAMASK</Text>
            <Text style={styles.modalMessage}>
              You must be connected to your wallet before you can download this book.
            </Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleMetaMaskPress}>
                <Text style={styles.modalButtonText}>MetaMask</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}

      <Image source={require('../../assets/images/p3.png')} style={styles.imageOverlay1} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText1}>
        <Text style={styles.mainTitle1}>Dr.X : {"\n"}</Text>
        <Text style={styles.subtitle1}>The Out Sider (2022)</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText1}>
        <Text style={styles.publishedLabel1}>Published:{"\n"}</Text>
        <Text style={styles.publishedDate1}>May 25,2022{"\n"}</Text>
        <Text style={styles.writerLabel1}>Writer:{"\n"}</Text>
        <Text style={styles.writerName1}>Wasaam Qazi, Zohaib</Text>
      </Text>

      {/* Rating Section */}
      <View style={styles.ratingContainer1}>
        {[...Array(5)].map((_, index) => (
          <Icon key={index} name="star" size={8} color="#F1C644" /> // Changed to MaterialIcons
        ))}
        <Text style={styles.ratingText1}>(94)</Text>
      </View>

      {/* Price Section */}
      <Text style={styles.priceText1}>500 SVET</Text>

      {/* Buy Now Button */}
      <TouchableOpacity onPress={handleBuyNowPress}>
        <Text style={styles.buyNowButton1}>BUY NOW</Text>
      </TouchableOpacity>

      {/* Thin Line Divider */}
      <View style={styles.divider1}></View>

      {/* Custom Modal for MetaMask connection */}
      {modalVisible && (
        <Animated.View style={[styles.modalOverlay1, { opacity: fadeAnim }]}>
          <View style={styles.modalContent1}>
            <Text style={styles.modalTitle1}>CONNECT METAMASK</Text>
            <Text style={styles.modalMessage1}>
              You must be connected to your wallet before you can download this book.
            </Text>

            <View style={styles.modalButtonContainer1}>
              <TouchableOpacity style={styles.modalButton1} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton1} onPress={handleMetaMaskPress}>
                <Text style={styles.modalButtonText1}>MetaMask</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
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
    width,
    height,
    resizeMode: 'cover',
  },
  componentImage: {
    position: 'absolute',
    top: '-42%',
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageOverlay: {
    position: 'absolute',
    top: '8%',
    left: '7%',
    width: '30%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 35 }, { translateY: -190 }],
  },
  mainTitle: {
    fontWeight: '700',
    fontSize: 12.24,
  },
  subtitle: {
    fontWeight: '700',
    fontSize: 12.24,
    color: '#ffffff',
  },
  publishedText: {
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 20 }, { translateY: -130 }],
  },
  publishedLabel: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  publishedDate: {
    fontWeight: '300',
    fontSize: 8.52,
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
    color: '#B5B4B4',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '37%',
    left: '44%',
  },
  ratingText: {
    fontSize: 7,
    marginLeft: 5,
    color: '#C0C0C0',
    fontWeight: '300',
    //top: 0,
  },
  priceText: {
    fontSize: 6.5,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    transform: [{ translateX: 40 }, { translateY: -60 }],
    borderWidth: 0.52,
    borderColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
    textAlign: 'center',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  buyNowButton: {
    fontSize: 6.5,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    transform: [{ translateX: 80 }, { translateY: -445 }],
    borderWidth: 0.52,
    borderColor: '#FF0000',
    backgroundColor: '#FF0000',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
    textAlign: 'center',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '45%',
  },

  // Custom Modal Styles
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: 'grey',
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  modalMessage: {
    fontSize: 12,
    marginBottom: 20,
    color: '#ffffff',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Repeat the same styles for the second set of content
  imageOverlay1: {
    position: 'absolute',
    top: '38%',
    left: '7%',
    width: '30%',
    height: height * 0.5,
    resizeMode: 'contain',
  },
  welcomeText1: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 35 }, { translateY: 32 }],
  },
  mainTitle1: {
    fontWeight: '700',
    fontSize: 12.24,
  },
  subtitle1: {
    fontWeight: '700',
    fontSize: 12.24,
    color: '#ffffff',
  },
  publishedText1: {
    fontSize: 8.52,
    fontWeight: '300',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: 20 }, { translateY: 93 }],
  },
  publishedLabel1: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  publishedDate1: {
    fontWeight: '300',
    fontSize: 8.52,
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
    color: '#B5B4B4',
  },
  ratingContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '67%',
    left: '44%',
  },
  ratingText1: {
    fontSize: 7,
    marginLeft: 5,
    color: '#C0C0C0',
    fontWeight:'300',
    //top: 0,
  },
  priceText1: {
    fontSize: 6.5,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    transform: [{ translateX: 40 }, { translateY: 160 }],
    borderWidth: 0.52,
    borderColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
    textAlign: 'center',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  buyNowButton1: {
    fontSize: 6.5,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    transform: [{ translateX: 80 }, { translateY: -223 }],
    borderWidth: 0.52,
    borderColor: '#FF0000',
    backgroundColor: '#FF0000',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 3,
    textAlign: 'center',
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  divider1: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '75%',
  },
  modalOverlay1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent1: {
    width: 320,
    padding: 20,
    backgroundColor: 'grey',
    borderRadius: 15,
    alignItems: 'center',
  },
  modalTitle1: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  modalMessage1: {
    fontSize: 12,
    //textAlign: 'center',
    marginBottom: 20,
    color: '#ffffff',
  },
  modalButtonContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton1: {
    flex: 1,
    paddingVertical: 12,
    //backgroundColor: '#FF0000',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  modalButtonText1: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PopularScreen;
