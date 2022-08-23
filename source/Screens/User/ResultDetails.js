import { View, Text } from 'react-native'
import React from 'react'

const ResultDetails = ({route}) => {
    const data=route.params
    // console.log(data)
  return (
    <View>
        {data?.map((item,index)=>(
            <>
            <Text>
                Name:{item.name}
            </Text>
              <Text>
              Department:{item.dept}
          </Text>
          <Text>
              Roll Number:{item.rollno}
          </Text>
          <Text>
              Total votes:{item?.voteCount?.length}
          </Text>
            </>
        ))}
    </View>
  )
}

export default ResultDetails