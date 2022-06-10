import * as React from 'react';
import MapView, { Marker ,Circle,PROVIDER_GOOGLE }  from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useState,useEffect } from 'react';
// import { get } from 'react-native/Libraries/Utilities/PixelRatio';
// import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
// import Geocoder from 'react-native-geocoder';
// import Location from './components/Location';



export default function App() {

  // const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin,setPin]=useState({
    latitude:0,
    longitude:0
  });




  const DragMarker= async(event)=>{
  //   try {
      
  //     let obj=event.nativeEvent.coordinate;
  //     console.log(obj);
  //     getAddress(obj.latitude,obj.longitude);


  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  // let obj={
  //   coords1:
  //   { accuracy: 603, altitude: 0, altitudeAccuracy: 0, heading: 0, latitude: 37.4220005, longitude:96, speed: 0},
  //   coords2:
  // { accuracy: 603, altitude: 40, altitudeAccuracy: 0, heading: 0, latitude: 96.4223005, longitude:106, speed: 0},
  // coords3:
  // { accuracy: 603, altitude: 65, altitudeAccuracy: 0, heading: 0, latitude: 67.3193203, longitude:170, speed: 0},
  };



  //  const getAddress=async(lat,lng)=>
   
  //   // await Geocoder.fallbackToGoogle("AIzaSyBp9lmsC6NdDmz7uYEk-LOYx-IRe1xDmos");
     
  //   // // let lat=e.nativeEvent.coordinate.latitude;
  //   // // let lng=e.nativeEvent.coordinate.longitude;
  //   //   try {
  //   //     let res = await Geocoder.geocodePosition({lat,lng});
  //   //     let addr= (res[0].formattedAddress);
  //   //     console.log(addr);
  //   //   } catch (error) {
  //   //    alert(error)
  //   //   }

  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }
  //     else{

  //       // let location = await Location.getCurrentPositionAsync({});
  //       let address1=await Location.reverseGeocodeAsync(obj.coords1);
  //       let address2=await Location.reverseGeocodeAsync(obj.coords2);
  //       let address3=await Location.reverseGeocodeAsync(obj.coords3);
  //       // setLocation(location);
  //       console.log(location);
  //       console.log(address1);
  //       console.log(address2);
  //       console.log(address3);
  //       // console.log("done");
  //     }
  //   })();
    
    
  // }
    
      // //  Geocoder.setApiKey();
      //  Geocoder.getFromLatLng(41.89, 12.49)
      //  .then(json => {
      //          var addressComponent = json.results[0].address_components[0];
      //    console.log(addressComponent);
      //  })
      //  .catch(error => console.warn(error));
      // {"coords": {"accuracy": 603, "altitude": 0, "altitudeAccuracy": 0, "heading": 0, "latitude": 37.4220005, "longitude": -122.0839996, "speed": 0}
   
 
  
  const curretntlocation= ()=> {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      else{
      
          let location = await Location.getCurrentPositionAsync({});
        let address=await Location.reverseGeocodeAsync(location.coords);
        // setLocation(location);
        console.log(location);
        console.log(address);
        // console.log("done");
      }
    })();
  };

  const getAddress= (e)=> {
    (async () => {
      // let { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') {
      //   setErrorMsg('Permission to access location was denied');
      //   return;
      // }
      // else{
        console.log(e.nativeEvent.coordinate);
        setPin(e.nativeEvent.coordinate);
      let obj={
        coords1:
        { "latitude": e.nativeEvent.coordinate.longitude, "longitude":e.nativeEvent.coordinate.latitude}};
        
        // let location = await Location.getCurrentPositionAsync({});
        let address=await Location.reverseGeocodeAsync(obj.coords1);
        // setLocation(location);
        // console.log(location);
        console.log(address);
        // console.log("done");
      // }
    })();
  }

  return(
  <>
    <View style={styles.container}>
      <MapView style={styles.map}
        // provider={PROVIDER_GOOGLE}
      >

      <Marker 
      title={'black'} 
      pinColor={'green'}

      coordinate={{longitude:72.242060,latitude:33.880660}} 
      draggable={true}
      // onDragStart={{}}
      onDragEnd={(e)=>getAddress(e)}      
    >

    </Marker>
          <Circle 
            center = { {longitude:pin.longitude,latitude:pin.latitude} }
            radius = {15600}
            // strokeWidth = { 5 }
            // strokeColor = { '#1a66ff' }
            // fillColor = { 'rgba(230,238,255,0.5)' }
            // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
    /> 

      </MapView>


    <Text onPress={curretntlocation}>GET CURRENT LOCATION</Text>
    {/* <Text onPress={()=>getAddress(72.242060,33.880660)}>SPEFICI</Text> */}
    </View>

    {/* <Location/> */}
    </>
    

  );
    }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:12
  },
  map: {
    width: "70%",
    height: "80%",
  },
})