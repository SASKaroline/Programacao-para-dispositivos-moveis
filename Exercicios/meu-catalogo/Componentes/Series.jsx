import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Series(props) {
    const { nome, ano, diretor, temporadas, capa} = props

    return (
      <View style={styles.container}>
  
        <Image 
          source={{
            uri: capa
        }} style={styles.image}
        />  
  
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Ano: {ano}</Text>
        <Text style={styles.texto}>Diretor: {diretor}</Text>
        <Text style={styles.texto}>Temporadas: {temporadas}</Text>

  
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      container: {
          backgroundColor: '#8e55ff',
          borderRadius: 10,
          padding: 10,
          marginLeft: 55,
          marginRight: 55,
          marginTop: 30,
          flex: 1,
  
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 10,
      },
      titulo: {
        fontSize: 25,
        fontWeight: 600,
        color: "#1e0059",
        textAlign: "center"
    },
      texto: {
          fontSize: 17,
          fontWeight: 400,
          color: "white"
      },
      image: {
          width: 250,
          height: 350,
          marginTop: 15,
          borderRadius: 5,
          marginBottom: 20
        }
  })