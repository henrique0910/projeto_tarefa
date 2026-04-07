
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [tarefas,setTarefas] = useState
  ([ 
    {id:"1", titulo: "Aprender git"},
    {id: "2", titulo: "Aprender fazer commit "},
    {id: "3", titulo: "Aprender utilizar o GitHub"},
    {id: "4", titulo: "realizar um novo commit"},
  ])

const [novaTarefa, setnovaTarefa] = useState ('')
function addTarefa (){
  const task = [{
    id : String (Date.now()),
    titulo : novaTarefa
 }]
}

   return (
    <View style = {styles.container}>
      <Text style = {styles.titulo}>lista de Tarefas</Text>

      <FlatList 
      data = {tarefas}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item})=>(

        <Text style = {styles.item}>{item.titulo}</Text>
      )}
       
    
      />
      <TextInput 
      style = {styles.input}
      value= {novaTarefa}
      onChangeText={ (texto)=> setnovaTarefa(texto) }
      placeholder='Digite uma tarefa'
      textAlign='center'

      
      />
    
      <TouchableOpacity style ={styles.btnAdicionar}><text>Adicionar Tarefa</text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9B30FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
   color: 'white',
  },
  item: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ff00ff',
    borderRadius: 5,
    color: 'white'

  },
  btnAdicionar:{
width: "50%",
backgroundColor: '#ff00ff',
margin: 15,
height: 40,
borderRadius: 5,
color: 'white',
justifyContent: "center",
alignItems: "center"
},
input: {
  borderWidth: 1,
  width: "30%",
  margin: 15,
  borderColor: "#fefefe",
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
  backgroundColor: '#ff00ff',
  textAlign: 'center',
  color: 'white',

},


});
