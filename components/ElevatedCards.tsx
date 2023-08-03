import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>see</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>movies</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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
        borderRadius:4,
        margin:10
    },
    elevatedCard:{
        backgroundColor:"#b1c9b8",
        elevation:10
    },
    container:{
        padding:10,
    }
})