import { View, Text,StyleSheet,SafeAreaView,KeyboardAvoidingView,Icon,TextInput,Linking,TouchableOpacity } from 'react-native'
import React from 'react'

export default function RegisterScreen2({navigation}) {
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:"#fff"}}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.TextStyle}>Register</Text>
            <View style={{width:"100%"}}>
            <TextInput style={styles.Inputs} placeholder='username...'></TextInput>
            
            </View>
            <TouchableOpacity style={styles.Btn} 
            onPress={()=>navigation.navigate('Welcome')}>
                <Text style={{color:"white"}}>SIGN UP</Text>
            {/* <Icon name="rocket" size={30} color="#900" /> */}
            </TouchableOpacity>
        </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        // margin:15,
        // borderRadius:50,
    },
    TextStyle:{
        // paddingHorizontal:10,
        fontSize:30,
        fontWeight:"500",
        margin:10,
    },
    Inputs:{
        margin:10,
        paddingHorizontal:10,
        paddingVertical:3,
        color:"black",
        borderWidth:2,
        borderRadius:2,
        borderColor:"black"
    },
    Btn:{
        alignItems: "center",
        marginHorizontal:10,
        backgroundColor: "#000",
        borderRadius:5,
        padding: 10,
        width:"95%",
        paddingVertical:15,
    }
});