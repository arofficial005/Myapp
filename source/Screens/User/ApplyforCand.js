import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ApplyforCand = () => {
  return (
    <View>
       <Text style={[styles.bigBlue]}> Choose society & apply for candidate</Text>
    </View>
  )
}

export default ApplyforCand

const styles = StyleSheet.create({
    bigBlue: {
        color: '#f5ac58',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
      },
})