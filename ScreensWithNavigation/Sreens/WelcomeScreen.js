import { StyleSheet, Text, View,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import React from 'react'


export default function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    
        <View style={styles.mainContainer}>
            <Image style={styles.image}
            resizeMode='cover'
            source={require("../assets/Welcome.jpg")}
            ></Image>
            <Text style={styles.WelcomeText}>WELCOME </Text>
            <View style={styles.botContainer}>
                <Image style={{width:50,height:50, borderRadius:50}}
                // resizeMode='cover'
                source={require("../assets/unnamed.webp")}></Image>
                <Text style={styles.botText}>Haseeb Rehman{'\n'}@haseeb26</Text>
                {/* <Text>@</Text> */}
            </View>
            <View style={styles.ftContainer}>
                <TouchableOpacity>
                <Text style={styles.login}
                onPress={()=>navigation.navigate('Login')}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.register} 
                 onPress={()=>navigation.navigate('Register')}
                
                >REGISTER</Text>
            </View>
        </View>
      
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    },
    mainContainer:{
        
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:"100%",
        height:"100%",
        bottom:100,
        borderRadius:3,
        borderColor:"pink",
        borderWidth:6,
        
    },
    WelcomeText:{
        fontSize:44,
        color:"black",
        justifyContent:"center",
        top:270,
        position:"absolute",
        // fontFamily:"sans-serif",
        fontWeight:"bold"
    },
    botContainer:{
        bottom:160,
        alignSelf:"flex-start",
        left:20,
        flexDirection: "row",
    },
    botText:{
        left:10,
        fontSize:20,
        fontWeight:"bold",
    },
    ftContainer:{
        bottom:110,
        flexDirection:"row",
    },
    login:{
        borderWidth:2,
        borderColor:"black",
        // padding:3,
        paddingVertical:18,
        paddingHorizontal:53,
        fontSize:17,
        fontWeight:"bold",
        right:7,
        borderRadius:10,
    },
    register:{
        borderWidth:2,
        fontSize:17,
        fontWeight:"bold",
        borderColor:"black",
        paddingVertical:18,
        paddingHorizontal:53,
        backgroundColor:"black",
        color:"white",
        borderRadius:10,
    }

})