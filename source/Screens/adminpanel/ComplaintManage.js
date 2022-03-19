import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComplainManage = () => {
  return (
    <View>
      <Text style={[styles.bigBlue]}> Complaint Box</Text>
    </View>
  )
}

export default ComplainManage

const styles = StyleSheet.create({
    bigBlue: {
        color: '#f5ac58',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
      },
})