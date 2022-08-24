import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

const ResultDetails = ({route}) => {
    const data=route.params
    // console.log(data)
  return (
    <View style={styles.container}>
        {data?.map((item,index)=>(
            <>
            <Text style={styles.item}>
                Name:{item.name}
            </Text>
              <Text style={styles.item}>
              Department:{item.dept}
          </Text >
          <Text style={styles.item}>
              Roll Number:{item.rollno}
          </Text>
          <Text style={styles.last}>
              Total votes:{item?.voteCount?.length}
          </Text>
            </>
        ))}
    </View>
  )
}

export default ResultDetails
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#36485f',
   },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,  
     width: "100%",
     borderRadius: 25,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 10,
     backgroundColor: "#fcfcfc",
     textAlign: 'center',
  },
  last: {
    padding: 10,
    fontSize: 18,
    height: 44,  
     width: "100%",
     borderRadius: 25,
     alignItems: "center",
     justifyContent: "center",
     marginTop: 10,
     marginBottom:25,
     backgroundColor: "#fcfcfc",
     textAlign: 'center',
  },

  
 
})