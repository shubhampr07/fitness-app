import { Pressable, StyleSheet, Text, View , Image} from 'react-native'
import React from 'react';
import fitness from '../data/fitness';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const FitnessCards = () => {

    const FitnessData = fitness;
    const navigation = useNavigation();

  return (
    <View style={{marginTop:60}}>
        {
            FitnessData.map((item, index) => (
                <Pressable onPress={() => navigation.navigate("Workout", {
                    image:item.image,
                    excercises:item.excercises,
                    id:item.id,
                })} 
                key={index} style={{alignItems:"center", justifyContent:"center", margin:5, padding:10}}>
                    <Image style={{width:"95%", height:140, borderRadius:7}} 
                    source={{uri:item.image}} />
                    <Text style={{position:"absolute", color:"gray",fontSize:18, fontWeight:"bold",left:20,top:20}}>{item.name}</Text>
                    <MaterialCommunityIcons style={{position:"absolute", color:"white",bottom:15,left:20}} name="lightning-bolt" size={24} color="black" />
                </Pressable>
            ))
        }
    </View>
  )
}

export default FitnessCards

const styles = StyleSheet.create({})