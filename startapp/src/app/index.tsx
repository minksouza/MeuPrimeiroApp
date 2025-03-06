import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"

import { Button } from "@/components/button"
import { Input } from "@/components/input"




export default function Index(){
    const [name, setName] = useState("")

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Olá, {name}
            </Text>
            <Input onChangeText={setName} />
            <Button title="CONTINUAR" onPress={()=>router.navigate("/home")} />
        </View>
    )
}


const styles = StyleSheet.create({
    titulo:{
        color: "red",
        fontSize: 24 ,
        fontWeight:"bold"
    },
    container:{
        height:"100%",
        justifyContent:"center",
        padding:30,
        gap: 15
    }
})