import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const listaCarros = ["Gol", "Palio", "Uno", "BYD", "Honda Civic"]

    return (
        <View style={styles.container}>

            {listaCarros.map(
                carro => <Text style={styles.texto}>{carro}</Text>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fd95d5',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        alignItems: "center"
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        color: "white"
    },
})