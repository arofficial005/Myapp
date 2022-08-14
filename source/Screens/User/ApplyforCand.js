import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ApplyforCand = () => {
  return (
    <View>
       <Text style={[styles.bigBlue]}> First you have to choose society in which you are interested then waiting for open application ,when applications are accepting then apply for your post to Coordinator of society after applying ,respected  coordinator will invite you for interview when you will pass interview you will be shortlisted then Coordinator will generate Election.After winning Election you will be candidate. Thanks for using E-society !</Text>
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