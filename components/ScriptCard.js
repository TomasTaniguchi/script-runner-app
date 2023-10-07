import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useCallback} from 'react'
import { client } from '../Client';

const ScriptCard = (props) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const {id, name, description, last_time_run, started_at} = props;

  async function deletePost() {
    const res = await client.put("/run/"+id);
    console.log(res.data)
    return res.data
  }
  
  const getCallback = useCallback((func, param = null) => {
    return func(param);
  }, []);
  return (
    <TouchableOpacity style={styles.card} onPress={deletePost}>
      <Text style={styles.cardText}>{name}</Text>
      <Text style={styles.cardText}> Ultima vez ejecutado: {last_time_run}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 10,
    width: 300,
    height: 100,
  },
  cardText: {
    color: 'white'
  }
});
export default ScriptCard