import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Yellow</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    },
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10      
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:10,
        elevation:10
    },
    cardOne:{
        backgroundColor:"#fa2216"
    },
    cardTwo:{
        backgroundColor:"#1b25f5"
    },
    cardThree:{
        backgroundColor:"#1bf51b"
    }
})