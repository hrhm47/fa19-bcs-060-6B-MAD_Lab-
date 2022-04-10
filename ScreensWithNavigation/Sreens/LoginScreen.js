import { View, Text,StyleSheet,SafeAreaView,KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:"#fff"}}>
    <SafeAreaView style={styles.container}>
        <Text style={styles.TextStyle}>Login</Text>
        <View style={{width:"100%"}}>
        <TextInput style={styles.Inputs} placeholder='example@gmail.com'></TextInput>
        <TextInput style={styles.Inputs}  placeholder='password' secureTextEntry></TextInput>
        </View>
        <TouchableOpacity style={styles.Btn} 
        onPress={()=>navigation.navigate('UserName')}>
            <Text style={{color:"white"}}>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
</KeyboardAvoidingView>
  )
}
export default LoginScreen;

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