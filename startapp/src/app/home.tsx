import {View, Text, StyleSheet} from "react-native"
import { router } from "expo-router"
import { Button } from "@/components/button"

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Button title="VOLTAR" onPress={()=>router.back()}/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        padding:32,
        gap: 16
    },

    title:{
        fontSize:18,
        fontWeight:"bold"
    }
})