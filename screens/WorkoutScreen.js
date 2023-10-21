import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {FitnessItems} from '../context'
import { AntDesign } from '@expo/vector-icons';


const WorkoutScreen = () => {

    const route = useRoute();
   
    const navigation = useNavigation();

    const {completed, setCompleted} = useContext(FitnessItems);

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 35, backgroundColor: "#D2E0FB" }}>
                <Image style={{ width: "100%", height: 170 }} source={{ uri: route.params.image }} />
                <Ionicons onPress={() => navigation.goBack()}
                    style={{ position: "absolute", top: 10, left: 10, }} name="arrow-back-outline" size={28} color="white" />
                {
                    route.params.excercises.map((item, index) => (
                        <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center" }} key={index}>
                            <Image style={{ width: 90, height: 90}} source={{ uri: item.image }} />

                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 17, fontWeight: "bold" , width:170}}>{item.name}</Text>
                                <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>X{item.sets}</Text>
                            </View>

                            {completed.includes(item.name) ? (
                                <AntDesign style={{marginLeft:40}} name='checkcircle' size={24} color='green'  />
                            ) : (null)}
                        </Pressable>
                    ))
                }
            </ScrollView>
            <View style={{ backgroundColor: "#D2E0FB"}}>
                <Pressable  onPress={() => { navigation.navigate("Preview", {
                    excercises:route.params.excercises, 
                    })
                    setCompleted([]);
                }}
                 style={{ backgroundColor: "#4681f4", padding: 10, borderRadius:10, width:120, marginLeft: "auto", marginRight: "auto", marginVertical: 20 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "600" }}>Start</Text>
                </Pressable>
            </View>
        </>
    )
}

export default WorkoutScreen

const styles = StyleSheet.create({})