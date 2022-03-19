import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Vote = () => {
  return (
    <View>
     <Text style={[styles.bigBlue]}> Choose society & vote your favourtite candidate</Text>
    </View>
  )
}

export default Vote

const styles = StyleSheet.create({
    bigBlue: {
        color: '#f5ac58',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
      },
})