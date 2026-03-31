
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  const tarefas = [
    {id:"1", titulo: "Aprender git"},
    {id: "2", titulo: "Aprender fazer commit "},
    {id: "3", titulo: "Aprender utilizar o GitHub"},
  ]
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

});
