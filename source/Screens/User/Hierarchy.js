import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hierarchy = () => {
  return (
    <View>
      <Text style={[styles.bigBlue]}> Choose Society & View Hierarchy</Text>
    </View>
  )
}

export default Hierarchy

const styles = StyleSheet.create({
    bigBlue: {
        color: '#f5ac58',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
      },
})