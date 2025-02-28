import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const Download = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Toptab');
  };

  // Mock download progress (you can dynamically change this)
  const downloadProgress = 30; // Example, you can change this based on actual download status
  const downloadProgress1 = 70;
  const downloadProgress2 = 50;
  const downloadSize = '1.8mb..'; 

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Main Image */}
      <Image source={require('../../assets/images/mainimage.png')} style={styles.image} />
      
      {/* Rectangle Image */}
      <Image source={require('../../assets/images/rectangle.png')} style={styles.rectangleimage} />
      
      <View style={styles.ImageContainer}>
        {/* Navigation to Drawer */}
        <TouchableOpacity onPress={() => navigation.navigate('Drawer1')}>
          <Image
            source={require('../../assets/images/windows.png')}
            style={styles.Image}
          />
        </TouchableOpacity>

        {/* Logo Image */}
        <Image
          source={require('../../assets/images/logo1.png')}
          style={styles.logoimage}
        />
      </View>

      {/* Start Flatlist section */}

      <Image source={require('../../assets/images/dn2.png')} style={styles.imageOverlay} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText}>
        <Text style={styles.mainTitle}>Dr.Steel Shot</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText}>
        <Text style={styles.publishedLabel}>Published:{"\n"}</Text>
        <Text style={styles.publishedDate}>May 25,2022{"\n"}</Text>
        <Text style={styles.writerLabel}>Writer:{"\n"}</Text>
        <Text style={styles.writerName}>May 25,2022</Text>
      </Text>

      {/* Thin Line Divider */}
      <View style={styles.divider}></View>

      {/* Download Progress Bar with text above */}
      <View style={styles.progressContainer}>
        {/* Text above the progress bar */}
        <Text style={styles.progressText}>{`${downloadProgress}%`}</Text>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, { width: `${downloadProgress}%` }]} // Dynamically change the width
          />
          <View
            style={[styles.remainingBar, { width: `${100 - downloadProgress}%` }]} // Remaining part
          />
        </View>

        {/* Download Size Text */}
        <Text style={styles.downloadSize}>{downloadSize}</Text>
        <Image source={require('../../assets/images/dn1.png')} style={styles.onimage}/>

      </View>

      {/* Second section */}
      <Image source={require('../../assets/images/dn3.png')} style={styles.imageOverlay1} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText1}>
        <Text style={styles.mainTitle1}>Dr.Wolf</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText1}>
        <Text style={styles.publishedLabel1}>Published:{"\n"}</Text>
        <Text style={styles.publishedDate1}>May 25,2022{"\n"}</Text>
        <Text style={styles.writerLabel1}>Writer:{"\n"}</Text>
        <Text style={styles.writerName1}>May 25,2022</Text>
      </Text>

      {/* Thin Line Divider */}
      <View style={styles.divider1}></View>

      {/* Download Progress Bar with text above */}
      <View style={styles.progressContainer1}>
        {/* Text above the progress bar */}
        <Text style={styles.progressText1}>{`${downloadProgress1}%`}</Text>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer1}>
          <View
            style={[styles.progressBar1, { width: `${downloadProgress1}%` }]} // Dynamically change the width
          />
          <View
            style={[styles.remainingBar1, { width: `${100 - downloadProgress1}%` }]} // Remaining part
          />
        </View>

        {/* Download Size Text */}
        <Text style={styles.downloadSize1}>{downloadSize}</Text>
        <Image source={require('../../assets/images/dn1.png')} style={styles.onimage1}/>

      </View>

      {/* Third section */}
      <Image source={require('../../assets/images/dn4.png')} style={styles.imageOverlay2} />

      {/* Title and Subtitle */}
      <Text style={styles.welcomeText2}>
        <Text style={styles.mainTitle2}>Dr.Steel Shot</Text>
      </Text>

      {/* Published Information */}
      <Text style={styles.publishedText2}>
        <Text style={styles.publishedLabel2}>Published:{"\n"}</Text>
        <Text style={styles.publishedDate2}>May 25,2022{"\n"}</Text>
        <Text style={styles.writerLabel2}>Writer:{"\n"}</Text>
        <Text style={styles.writerName2}>May 25,2022</Text>
      </Text>

      {/* Thin Line Divider */}
      <View style={styles.divider2}></View>

      {/* Download Progress Bar with text above */}
      <View style={styles.progressContainer2}>
        {/* Text above the progress bar */}
        <Text style={styles.progressText2}>{`${downloadProgress2}%`}</Text>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer2}>
          <View
            style={[styles.progressBar2, { width: `${downloadProgress2}%` }]} // Dynamically change the width
          />
          <View
            style={[styles.remainingBar2, { width: `${100 - downloadProgress2}%` }]} // Remaining part
          />
        </View>

        {/* Download Size Text */}
        <Text style={styles.downloadSize2}>{downloadSize}</Text>
        <Image source={require('../../assets/images/dn1.png')} style={styles.onimage2}/>

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
  ImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '5%',
    left: '8%',
    zIndex: 2,
  },
  Image: {
    width: 15, // Increased size for better visibility
    height: 15,
    resizeMode: 'contain',
  },
  logoimage: {
    width: 140,
    height: 50,
    position: 'absolute',
    top: '-100%',
    transform: [{ translateX: 80 }],
    zIndex: 2,
  },

  imageOverlay: {
    position: 'absolute',
    top: '2%',
    left: '7%',
    width: '20%',
    height: height * 0.4,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: -30 }, { translateY: -245 }],
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
    transform: [{ translateX: -40 }, { translateY: -200 }],
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
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '30%',
  },

  // Progress Bar Styles
  progressContainer: {
    position: 'absolute',
    top: '18%', // Adjust top position to be above the 30% divider
    left: '55%',
    width: '40%', // Make it a narrow container
    height: 30,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
    marginBottom: 0, 
    right:30,
  },
  progressBarContainer: {
    width: '100%',
    height: 4,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressBar: {
    backgroundColor: 'green',
    height: '100%',
  },
  remainingBar: {
    backgroundColor: 'white',
    height: '100%',
  },
  downloadSize: {
    fontSize: 10,
    fontWeight: '300',
    color: 'white',
    position: 'absolute',
    right: 1,
    bottom: -5, // Adjust the position below the bar
  },
  onimage: {
    position: 'absolute',
    top: '-60%',
    left: '55%',
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },

  // second section styles
  imageOverlay1: {
    position: 'absolute',
    top: '25%',
    left: '7%',
    width: '20%',
    height: height * 0.4,
    resizeMode: 'contain',
  },
  welcomeText1: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: -45 }, { translateY: -75 }],
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
    transform: [{ translateX: -40 }, { translateY: -30 }],
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
  divider1: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '53%',
  },

  progressContainer1: {
    position: 'absolute',
    top: '41%',
    left: '55%',
    width: '40%',
    height: 30,
    alignItems: 'center',
  },
  progressText1: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
    marginBottom: 0, 
    right:30,
  },
  progressBarContainer1: {
    width: '100%',
    height: 4,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressBar1: {
    backgroundColor: 'green',
    height: '100%',
  },
  remainingBar1: {
    backgroundColor: 'white',
    height: '100%',
  },
  downloadSize1: {
    fontSize: 10,
    fontWeight: '300',
    color: 'white',
    position: 'absolute',
    right: 1,
    bottom: -5,
  },
  onimage1: {
    position: 'absolute',
    top: '-60%',
    left: '55%',
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },

  // third section styles
  imageOverlay2: {
    position: 'absolute',
    top: '48%',
    left: '7%',
    width: '20%',
    height: height * 0.4,
    resizeMode: 'contain',
  },
  welcomeText2: {
    fontSize: 12.24,
    fontWeight: '700',
    color: '#ffffff',
    position: 'absolute',
    lineHeight: 14,
    transform: [{ translateX: -30 }, { translateY: 100 }],
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
    transform: [{ translateX: -40 }, { translateY: 145 }],
  },
  publishedLabel2: {
    fontWeight: '700',
    fontSize: 10.33,
    color: '#B5B4B4',
  },
  publishedDate2: {
    fontWeight: '300',
    fontSize: 8.52,
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
    color: '#B5B4B4',
  },
  divider2: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#6F7071',
    marginVertical: 20,
    position: 'absolute',
    top: '76%',
  },

  progressContainer2: {
    position: 'absolute',
    top: '65%',
    left: '55%',
    width: '40%',
    height: 30,
    alignItems: 'center',
  },
  progressText2: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
    marginBottom: 0, 
    right:30,
  },
  progressBarContainer2: {
    width: '100%',
    height: 4,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressBar2: {
    backgroundColor: 'green',
    height: '100%',
  },
  remainingBar2: {
    backgroundColor: 'white',
    height: '100%',
  },
  downloadSize2: {
    fontSize: 10,
    fontWeight: '300',
    color: 'white',
    position: 'absolute',
    right: 1,
    bottom: -5,
  },
  onimage2: {
    position: 'absolute',
    top: '-60%',
    left: '55%',
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default Download;
