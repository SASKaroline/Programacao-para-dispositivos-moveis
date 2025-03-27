import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Primeiro Componente</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#560591',
        padding: 20,
        borderWidth: 10,
        borderColor: "Clicou no botão!!!"
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        color: "white"
    }
})