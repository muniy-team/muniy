import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class BillsScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    return (
      <View style={styles.container}>

      <ScrollView style={styles.container}>

      <View style={styles.getStartedContainer}>
      <Text style={styles.getStartedText}>Pick your service</Text>

      <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/bills.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.contentContainer}>
              <Entypo name="mobile" size={100} color="green" />
        </View>
        <View style={styles.contentContainer}>
              <Entypo name="mobile" size={100} color="green" />
        </View>
        <View style={styles.contentContainer}>
              <Entypo name="mobile" size={100} color="green" />
        </View>      
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.contentContainer}>
              <Entypo name="credit-card" size={100} color="green" />
        </View>
        <View style={styles.contentContainer}>
              <Entypo name="credit-card" size={100} color="green" />
        </View>
        <View style={styles.contentContainer}>
              <Entypo name="credit-card" size={100} color="green" />
        </View>      
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.contentContainer}>
              <Entypo name="credit-card" size={100} color="green" />
        </View>
        <View style={styles.contentContainer}>
              <Entypo name="credit-card" size={100} color="green" />
        </View>
        <View style={styles.contentContainer}>
              <Entypo name="credit-card" size={100} color="green" />
        </View>      
      </View>
           
          </View>

      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
           <Text>Not a member yet?</Text>
            <Text>Register</Text>
        </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});