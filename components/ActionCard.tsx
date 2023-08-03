import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(WebsiteLink: string){
        Linking.openURL(WebsiteLink)
    }
  return (
    <View style={styles.card}>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Netflix</Text>
        <Image 
        source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEUAAACxBg/lCRO0Bg+HBAutBg62Bg96BArpCROpBg6CBQysBhAAAAPlCRQAAgCvBg6VBA6gBQ+kBQ+UBA6bBA+PAw7uCRPjChd1BAqHAw6hBQ4AAAd/BAjzCRayBRTpCRBuBAnYCBJmBArMBxFYBAjCBgwsAgbdCRZKAgjICBL2CRMPAwAxAAd/AxFgAwuLARMgAAU9AgpPAwqEAxN1AxGgAhTEBhglAgVAAwJTBAkaAANDNZgRAAAKtElEQVR4nO2daXPbOBKGSZAUwQPiCVKUI1FHHEebyHYSjyeZ///DtkFKti42dqe2MuwtvN9SFqr0pG8AFC3LyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjo/0RTzd/jqRUPrr0b/FO/Fv/zb1Js3ek+YA39P8T6/5+/85X+9/K9YFhREO0HOT6GbojI3fxOjCHB//K84qiquwHE+MPEQdXobPybFAqGqtoMuZvv2Jgc9zeTDMldM4ZB8gl5QhsFZGwxHcgYZAjzGndT7se3A4oMoX1fcxTxfiBjkCF08lbjpgMryRBOyjXuppW8vZIMoR1MUEDBt7dXUiFsHDtF41DU1Sdo7q4TKhVC13ZS1E0FE/Ob9YIKIdhwnmBGFIw/3FxJhdB1loHECUX1+VZJpENoL4stXi94fmslIcKkDCqOMta3WlNChHbuCoES8luzHh3CxImKHeqlrApurKRDCN8mzXAvZfzGlgUpwizER6iarwhXfPU9A3mPx2E7uV5JiDBJojJtMUJxa8AgRGjbXtk8MF4P21Hw8GozgxZhJvEBg4kdbcIkL4sKqYnQuf3ry+V+DSlCcNNwjRSMmtdtcbmSGOFcLjm+q3g1B9MiTPJCaor+4uvFSmqEZagZMFh5kWpoEdpB2UQVCsjri86NGKGXp3uO7w1XP89X0iPUuKm4nIOpEQalnOOErThfSYowsaE1Lfb4rqJoH89WkiK0HaiIZbhDC4bgy7NjfXKEefpUQtEftmPNqmlMmTAon/y6rbF82s5I2zDI0vCV1YNzIsShODsPpkUIivLUhc4NzafVuQ0TWoSqXvgPmg2p5mQlRcIinGgIdycryREmXpY2ssL33Krn95XkCCEQS7lfawhPzoNnGN8YCRMPCEMbv7VwOgfPbGo2TIJ52jQ4oai+va2kSJinhb9FzxJrnr2tnCUeLUJHEcowr2o2CCkYX1vHqj/zkgSx4vgIYbwIylT6govBzg361sV3a0qYMEvd/a4d3vsGL2XB9LCbMYvoEULjln4o2+FIVD0dP84X5AgTtZVRStfX3OSrHo9xGEUePcIslR92ms7NOaycRYGHZNNxEkJFlG6h2Rqu3mwIhMNGHCUhBGJZND5yysZU5/bSr+wJBxHHR6gE9aKQoeagjd/3K1d5EEX0CCEQQ4lvfovDeXBHOOymoyRMvGheFu7LAwrIeP/dgTCIhnPNGAkTIMwz+fTBQXtT0fYDhiJEsukYCSGZRiqbhk8cT6fVcwz5dJVlyohDkThSQqgXkE1n+BzMeDcHb7IsJ0eYKEIpfVsgO8OsHzCUDUkSZlkhG79FCRnMwXedDQGRGiHUC+hNX3RuqubgTVmCEQfbmnESdhMUEIaaZzB4bR0JB+vFaAlVRQQ31V1b+NUTZsGgEUdKqFrTLhB3aBzW6jxYEc7zwd50rISJl8/Twg1LzWlpBYRF2rnpQK4ZL2HQuekMdVKuBozHlCphXqaN67/ibsom1kbKHvF2II6XEAIxLZ7CAiXkrLp7lAc3vZ1NR0uYBHnWuemDYNiOTTX7BTZMVa653deMlxAqIgyJzX7C0Scv+f13tykQNx0vIQRiprKpixOy6tF96gIRCgYpL7WBsC/6D3jV58uwUZGY51FEibBr3OZlKl1fcx7M1rMnibjpqAmhXkgZ6i6cVk2I1YsRE3p9NtUPGBPlpofelBKh3RGqbIo+eMm4qF8at+jqBTUbqglKZdMQPw9mVRq6yojKTSkRdoEI9QKyKXoeDFH6ug/lsTelRqiyqdzP8adnWe03smu/b3XfIyaEGbGrFzL0sc1vIURbgpsOZdMREybeMZvudwJ/BmOnCFPChGFZaW63+z+g6Hf1ghhhpOoF5JoXfFOR8bzPpkFwnWpGTgj1QvWmIT4HM7bdNwfCq3oxYsJuguqKvgwLvK0RFRB2ueZ6Rhw3YReI3YCBh6Fg0SGbXqeakRNG+bzLNZoBQ4i1r0aoW43buAmTKO/c1G0058G8/dH1psQIu1O2rjftBgysJtZi6Xduel0Rx00IqUa1NYV8cpctcrkd2pr1DIx4KxBHTugdelPX/VhhbY3glfyhjJhfzYjjJrQPhGkjP78iTygIUfOJLxuVTQnaMFf1Qv7yNc9gCBihVNGPItshRJhEUd+byo8W/gQ04zJ0Vb243HEbN6F9IATERwu9e6K2hsOmC8SL1nTkhBCIXlf0i8fpBv3JDDDwS9+bkiJ0uv2obsB4nFot3rq1f0DnpuoFNcJDNn20rFxzHrybgZtml5v7YyfssylE4sayPqKdW91yv3G7ikiMsDciEMZT3YCR76GtuWxNx01o9yUxgFwDhFZZMaQmcrHdu8pNz2dEGoS5IrSsbxXSfcOfFi646WVrSoDQ6whX6gcF1/XwKY16/sTzpXLTs5o/dkLwNxWIWbZSj1ekSF/TQvu9nkG9mNMiPLppvlIfel5ong9umifIpjBeOJQIu86tJ7R2+D034fiqcYtoEdonhHE4/DxbR/gwawpwUy8hRWh3brpSH5paCwywGzBUvSBmw76vWakPxZZma5hPYEjszqAcSoSqrQlW6kOxNcN/k4/XL6qtOZ0RKRCCDb2eEBBRN63VebA8n6BoEIIVZ4fP4c9gMPGqjoOpEUI2fSOMN5Xmnpvvymx+ckBDgTB5J4S+RuBHiTxTbnoSiBQIwYZJTwiAcSDQmsi3UPSzkysLFAiTxEvevHT6Hd0aBsTQLU5TDQVCqBdJcsw0Vszwu4o8BzfN33e+aRAmp4Sppjfd7mXXmtIitO13wm8LzU0+t1H1ghahfUJoWegVKcbr5Idqa2gRJrbjv38UfcEA42IN2bQLxIQoYfyM7ioKmINl2tV8qoQwB2uenp2EUC8IE8YWeh0TmrraV/UioURoJ5NTG95VLf6EQuEWebQkTDid4Ic0/DUsSghEuoTWC/a77cpTfZkdKyI9wu5tl5p3mfBMpnQJO3k4Yfuqsmm/HUWTMMYP2tS96KIMSNvQ0txVbHOoFwlpwgC3Id+GKXHCn3jnJioIRI9wtYgtC7chE548BCJNQhD+kHct1m6akyaMP2myKW/SzKNMqOZgvHNbHuoFXcJC07mt99QJ/1qge9+skn0g0iW0NO9oExOZObQJQzwQ6zrMIjU70yWEAQO1IS8hEGkTTjS/NXwvc9JeGlsr/MIpq5s5aUIrjtWQiNxub+dpkiwJE8KAwWs+6KmQh3bKTQkTxvFjhdkQ3NTNnQlhQhBDNjME4zwq7Yg24R8c/02+bRE5tAk/a86DhQxoZxrLWmveH7wMPOKEKfKj30rbknIuVfq6wHvTKk2c5tarrv8B/T1Ca6vpayY5dcInzaNCD9mENqHmJh8gBjRs6NhDNrTuBfIOBXXQtnQvXz77D+nv2tDH3ioE7A+5S8GGQ4TKOgvs6VkmKnu81cJxnMm7bhIq4yxbXvXivU4R2we2HQVhHFuhk9hLMNaRyslTN5ytHj9++/T8Jb56VfWZ7qwvf379uQndMo/ut2JxgFVP8HPGwymy9DfK7bjszA1Xm89/fvnvYqf/8NtLEeOvv/xybm+FQl2U8TjicONvfj5PcVvd1ImFplcsf32fpR+skRjx+DWO3zI+/7eOPB7GGIkNjYyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjP4T/Rvwh/hI6Btg5wAAAABJRU5ErkJggg=='}}
        style={styles.cardImage}/>
      </View>
      <View style={styles.foot}>
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>openWebsite('https://www.youtube.com/watch?v=ePLIObDy_HI')}>
                <Text style={styles.footerContent}>Watch Trailer</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        margin:10
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        paddingBottom:10,
    },
    cardImage:{
        height:300,
        width:200
    },
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        padding:10
    },
    footer:{
        backgroundColor:"#E50914",
        borderRadius:5,
        width:110,
        padding:10
    },
    foot:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    footerContent:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:"#000000"
    }
})