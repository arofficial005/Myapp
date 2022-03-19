import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const MySocities = () => {
  return (
    <View style={styles.container}>
    <FlatList
      data={[
        {key: 'The Organizer Club'}
     
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
  </View>
  )
}

export default MySocities

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,  
      width: "100%",
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "#f5ac58",

      textAlign: 'center',
   },
})