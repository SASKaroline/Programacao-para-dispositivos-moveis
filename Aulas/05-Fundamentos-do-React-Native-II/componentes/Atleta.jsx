import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Atleta(props) {

    const { nome, idade, numero, imagem} = props


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Atleta</Text>

      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Número: {numero}</Text>

      <Image 
        source={{
            uri: imagem
        }} style={styles.image}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8e55ff',
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        marginLeft: 55,
        marginRight: 55,
        marginTop: 30,
        alignItems: "center",
        flex: 1
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        color: "white"
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 15,
        borderRadius: 5
      },
})