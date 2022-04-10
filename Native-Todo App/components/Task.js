import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native';

export default function Task(props) {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"skyblue",
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
        marginBottom:20,
    },
    itemLeft:{
       flexDirection:'row',
       alignItems:'center',
       flexWrap:'wrap'
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"navy",
        opacity:0.9,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%'
    },
    circular:{
        width:12,
        height:12,
        borderColor:'navy',
        borderWidth:2,
        borderRadius:5,
    }
});