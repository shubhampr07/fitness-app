import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import FitnessCards from '../components/FitnessCards'
import {FitnessItems} from '../context'

const HomeScreen = () => {

    const {calories, workout, minutes} = useContext(FitnessItems)

  return (
    <ScrollView style={{marginTop:20}}>
        <View style={{backgroundColor: "#D0E7D2",  marginTop:35, padding:10 ,height:200, width:"100%"}}>
            

            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:30}}>
                <View>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:18}}>{workout}</Text>
                    <Text style={{fontSize:17, marginTop:6}}>WORKOUTS</Text>
                </View>
                <View>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:18}}>{calories}</Text>
                    <Text style={{fontSize:17, marginTop:6}}>KCAL</Text>
                </View>
                <View>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:18}}>{minutes}</Text>
                    <Text style={{fontSize:17, marginTop:6}}>MINS</Text>
                </View>
            </View>

            <View style={{justifyContent:"center", alignItems:"center"}}>
                <Image style={{width:"95%", height:120, marginTop:20, borderRadius:7}} 
                source={{uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"}} />
            </View>
            
        </View>
        <FitnessCards />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})