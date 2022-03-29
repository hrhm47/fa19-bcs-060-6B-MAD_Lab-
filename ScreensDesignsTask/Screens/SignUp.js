import { StyleSheet, Text, View,Image } from 'react-native'
import * as React from 'react';
import LogIn from './LogIn';
// import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SignUp(navigation) {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
            <Image style={styles.mainImage}
            source={require('../ScreenDesign/Saly-1intro-image.png')}
            />

          </View>
          <View style={styles.textContainer}>
        <Text style={styles.boldText}>    Discover Your {'\n'}Own Dream House</Text>
        <Text style={styles.NormalText}>lorem-ipsum-react-native.js is a Node.js and Component.js module for generating passages of lorem ipsum text. Lorem ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.
        </Text>
        </View>
        <View style={styles.Buttons}>
            <Text style={styles.SignUp}>Sign in</Text>
            <Text style={styles.Register}
            onPress={()=>navigation.navigate('Home')}>Register</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        
    },
    mainContainer:{
        backgroundColor:"#ee82de",
        margin:10,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    mainImage:{},
    textContainer:{
        justifyContent:"center",
        alignItems:"center",
        margin:16,
    },
    boldText:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:10,
        
    },
    NormalText:{
        textAlign:"center",
        margin:5,
        fontSize:16,
        fontFamily:"notoserif",
        fontWeight:'200'

    },
    Buttons:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        bottom:5,
    },
    SignUp:{
        borderWidth:1,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        fontSize:22,
        fontWeight:"bold",
        paddingVertical:14,
        paddingHorizontal:50,
        backgroundColor:"#ee82de",
        color:"white",
        borderColor:"transparent",
        shadowColor: "#000",
        elevation: 10,
    },
    Register:{
        borderWidth:1,
        borderColor:"transparent",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        fontSize:22,
        fontWeight:"bold",
        paddingVertical:14,
        paddingHorizontal:50,
        color:"black",
        backgroundColor:"#f9f1f1",
        shadowColor: "#000",
        elevation:10,
        
    }
})