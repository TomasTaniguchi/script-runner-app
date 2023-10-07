import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, {useEffect, useState} from 'react'
import { client } from './Client';
import ScriptCard from './components/ScriptCard';


export default function App() {
  const [scripts, setScripts] = useState(null);

  useEffect(() => {
    const getScripts = async ()=>{
      const response = await client.get("/scripts/");
      setScripts(response.data);
      }    
  getScripts()
  }, []);

  scripts !== null ? console.log(scripts) : console.log("waiting")
  
  
  return (
    <View style={styles.container}>
      <Text>Toca para ejecutar el script de forma remota</Text>
      <FlatList
        data={scripts}
        renderItem={({item}) => <ScriptCard {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    padding: 10,
  },
});
