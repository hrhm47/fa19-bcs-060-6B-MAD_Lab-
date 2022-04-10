import React,{useState} from 'react';
import { StyleSheet, Text, View,
  TextInput,KeyboardAvoidingView,Platform,
  TouchableOpacity,ScrollView } from 'react-native';
import { Keyboard } from 'react-native';
import Task from './components/Task';


export default function App() {

  const [task,setTask]=useState();

  const [taskItems,setTaskItems]=useState([]); // this is for storing the user inputs in an array 
  const [ttask,setTtask]=useState(0);
  const [remtask, setRemtask]=useState(0);

  const totaltasks=()=>{
    setTtask(ttask + 1);
  }

  const remainingtasks=()=>{
    setRemtask(remtask+1);
  }
  const Remtasks=()=>{
    setRemtask(remtask-1);
  }

  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
    totaltasks();
    remainingtasks();
  }

  const completeTask =(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
    Remtasks();
  }


  return (
    <View style={styles.container}>
      
      {/* Today Tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

    <View  style={{justifyContent:"space-between",flexDirection:'row'}}>
        <Text style={{fontSize:17, alignSelf:"flex-start", color:"yellow",fontWeight:"700", fontStyle:"italic",textAlign:"center"}}>Today's Total Tasks: {'\n'}{ttask}</Text>
        <Text style={{fontSize:17, alignSelf:"flex-end", color:"yellow",fontWeight:"700", fontStyle:"italic",textAlign:"center"}}>Remainings Tasks: {'\n'}{remtask}</Text>
      
    </View>
      <View style={styles.items}>
      <ScrollView>
        {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={item} onPress={()=>completeTask(index)}>
                <Task key={item} text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      

      </View>
    {/* Write a task */}
    <KeyboardAvoidingView
      behavior={Platform.OS==='ios'? "padding":"height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={"Wrtie a task"}
      value={task}   onChangeText={text=>setTask(text)}/>

      <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'navy',
    opacity:0.67
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },sectionTitle:{
    color:"#fff",
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center",

  },
  input:{
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:"#c0c0c0",
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#c0c0c0",
    borderWidth:1
  },
  addText:{}


});
