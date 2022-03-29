import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Image,Platform } from 'react-native';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
    <LogIn></LogIn>
    {/* <SignUp></SignUp> */}
    
    </>
  );
}



