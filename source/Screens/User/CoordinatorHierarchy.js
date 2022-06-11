import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
const CoordinatorHierarchy = ({route}) => {
  const {email} = route.params;
  const [hasdata, setHasdata] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    firestore()
      .collection('VoterManagement')
      .doc(email)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          setHasdata(true);
          console.log('Coorinator data ', documentSnapshot.data().array);
          setData(documentSnapshot.data().array);
        }
      });
  }, []);

  return (
    <View>
      {hasdata ? (
        <FlatList
          data={data}
          renderItem={({item}) => <><Text style={styles.item}>{item.post}</Text><Text style={styles.item}>{item.name}</Text><Text style={styles.item}>{item.email}</Text><Text style={styles.item}>{item.dept}</Text></>}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#f5ac58',
    textAlign: 'center',
  },
});
export default CoordinatorHierarchy;
