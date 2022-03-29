import { StyleSheet, Text, View,SafeAreaView,TextInput,Image } from 'react-native'
import React from 'react'

export default function LogIn() {
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.mainContainer}>
              <Text style={styles.boldText}>Welcome Back</Text>
              <Text style={styles.normalText}>lorem-ipsum-react-native.js is a Node.js and Component.js module for generating passages of lorem ipsum text.</Text>
          </View>
          <View style={styles.inputContainer}>
              <TextInput style={styles.username} placeholder='Username, Email & Phone Number'></TextInput>
              <TextInput style={styles.username} placeholder='Password'></TextInput>
              <Text style={styles.forget}>Forget Password?</Text>
          </View>
          <View style={styles.buttons}>
              <Text style={styles.Signin}>Sign in</Text>
              <Text style={styles.signinText}>______________Or Sign up With______________</Text>
          </View>

        <View style={{flexDirection:"row",justifyContent:"center"}}>

            <View style={styles.icons}>
                <Image  source={require("../ScreenDesign/Google.png")}/>
            </View>
            <View style={styles.icons}>
                <Image  source={require("../ScreenDesign/Facbook.png")}/>
            </View>
            <View style={styles.icons}>
                <Image  source={require("../ScreenDesign/Group.png")}/>
            </View>
                
        </View>

      </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
    },
    mainContainer:{
        justifyContent:'center',
        alignItems:"center",
    },
    boldText:{
        fontSize:35,
        fontWeight:"bold",
        fontFamily:"serif",

    },
    normalText:{
        margin:15,
        fontSize:15,
        textAlign:"center",
        fontFamily:"serif",
    },  
    inputContainer:{
        top:30,
        width:"80%",
        left:25,
        
    },
    username:{
        backgroundColor:"#f9f1f1",
        color:"black",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    }, 
    forget:{
        alignSelf:"flex-end",
        fontSize:15,
        fontWeight:"bold",
        marginTop:5,
    },
    buttons:{
        top:70,
        width:"80%",
        left:40,
    },
    Signin:{
        borderWidth:1,
        borderColor:"transparent",
        borderRadius:10,
        fontSize:22,
        fontWeight:"bold",
        paddingVertical:10,
        textAlign:"center",
        color:"black",
        backgroundColor:"#ee82ee",
        shadowColor: "#000",
        elevation:5,
    },
    signinText:{
        marginTop:15,
        alignSelf:"center"
    },
    icons:{
        top:100,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:55,
        height:55,
        backgroundColor:"#f9f1f2",
        borderColor:"#ee82ee",
        borderWidth:.3,
        borderRadius:100,
        margin:5,
    },
    img1:{
        // borderRadius:100,
    }


})