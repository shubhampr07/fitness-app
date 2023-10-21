import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import {FitnessItems} from '../context'
const PreviewExercise = () => {

  const route = useRoute();
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);

  const exercises = route.params.excercises;
  const current = exercises[index];
  const {completed, setCompleted, calories, setCalories, workout, setWorkout, minutes, setMinutes} = useContext(FitnessItems)

  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <Image style={{ width: "100%", height: 370 }} source={{ uri: current.image }} />

      <Text
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, fontSize: 30, fontWeight: "bold" }}>
        {current.name}
      </Text>

      <Text
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30, fontSize: 30, fontWeight: "bold" }}>
        x {current.sets}
      </Text>

      {index + 1 >= exercises.length ? (<Pressable
        onPress={() => {
          navigation.navigate("Home")
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000)
        }}
        style={{ backgroundColor: "#4681f4", marginLeft: 125, marginTop: 25, borderRadius: 20, padding: 10, width: 150 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>DONE</Text>
      </Pressable>) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest")
            setCompleted([...completed, current.name])
            setWorkout(workout+1)
            setCalories((Number(calories)+6.30).toFixed(2))
            setMinutes(minutes+2.5)
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000)
          }}
          style={{ backgroundColor: "#4681f4", marginLeft: 125, marginTop: 25, borderRadius: 20, padding: 10, width: 150 }}>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>DONE</Text>
        </Pressable>
      )}



      <Pressable style={{ flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: "auto", marginTop: 50 }}>
        <Pressable
        disabled={index === 0}
        onPress={() => {
          navigation.navigate("Rest");

          setTimeout(() => {
            setIndex(index-1);
          }, 2000)
        }} 
        style={{ backgroundColor: "green", padding: 10, borderRadius: 10, marginHorizontal: 20, width: 100 }}>
          <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Prev</Text>
        </Pressable>

        {index + 1 >= exercises.length ? (<Pressable 
        onPress={() => {
          navigation.navigate("Home")
          setTimeout(() => {
            setIndex(index + 1);
          }, 2000)
        }}
        style={{ backgroundColor: "green", padding: 10, borderRadius: 10, marginHorizontal: 20, width: 100 }}>
          <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Skip</Text>
        </Pressable>) : 
        (<Pressable 
          onPress={() => {
            navigation.navigate("Rest")
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000)
          }}
        style={{ backgroundColor: "green", padding: 10, borderRadius: 10, marginHorizontal: 20, width: 100 }}>
          <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>Skip</Text>
        </Pressable>)}


      </Pressable>
    </SafeAreaView>
  )
}

export default PreviewExercise

const styles = StyleSheet.create({})