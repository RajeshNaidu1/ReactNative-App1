import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <Image source={{
            uri:"https://prominentoverseas.com/wp-content/uploads/2022/07/uk-prominent.jpg"
        }} style={styles.cardImage} />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>City of Dreams</Text>
            <Text style={styles.cardLabel}>London</Text>
            <Text style={styles.cardDescription}>London is famous for Big Ben, Buckingham Palace, British Museum, 
            and Tower Bridge. London is also known for its rich history, double-decker buses, red phone booths, 
            world-class museums and galleries, gigantic lush parks, financial districts, and cosmopolitan vibes</Text>
            <Text style={styles.cardFooter}></Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        padding:10,
        fontWeight:'bold'
    },
    elevatedCard:{
        backgroundColor:"#ffffff"
    },
    card:{
        padding:10,
        margin:10,
        borderRadius:10
    },
    cardImage:{
        height:250,
        borderRadius:10
    },
    cardBody:{},
    cardTitle:{
        textAlign:'center',
        color:"#000000",
        fontSize:20,
        fontWeight:'bold',
        paddingTop:10
    },
    cardLabel:{
        textAlign:'center',
        color:"#000000",
        fontSize:18,
        marginBottom:5
    },
    cardDescription:{
        textAlign:'center',
        color:"#5c5756"
    },
    cardFooter:{
        color:"#000000"
    }
})