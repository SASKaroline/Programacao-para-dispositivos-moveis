import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

console.log("Propriedades ->", props)

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <Text style={styles.texto}>Nome: {props.nome}</Text>
      <Text style={styles.texto}>Idade: {props.idade}</Text>
      <Text style={styles.texto}>Telefone: {props.telefone}</Text>
      <Text style={styles.texto}>Email: {props.email}</Text>
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