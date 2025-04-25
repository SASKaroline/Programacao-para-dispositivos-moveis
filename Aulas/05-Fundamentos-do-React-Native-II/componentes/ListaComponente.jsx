import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const listaCarros = ["Gol", "Palio", "Uno", "BYD", "Honda Civic"]

    return (
        <View style={styles.container}>

            {
                listaCarros.map(
                    (carro) => <Text>{carro}</Text>
                )
            }

            {
                listaCarros.map(
                    (carro) => <Text>{carro}</Text>
                )
            }

            {
                listaCarros.map(
                    (carro) => <Text>{carro}</Text>
                )
            }

            {
                listaCarros.map(
                    (carro) => {
                        <View style={styles.containerAmarelo}>
                            <Text>{carro}</Text>
                        </View>
                    }
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
        alignItems: "center",

        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        color: "white"
    },

})