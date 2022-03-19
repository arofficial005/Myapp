import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Results = () => {
  return (
    <View>
      <Text style={[styles.bigBlue]}> Choose society & see voting result</Text>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    bigBlue: {
        color: '#f5ac58',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
      },
})