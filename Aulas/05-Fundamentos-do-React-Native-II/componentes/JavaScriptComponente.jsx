import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    //Lógica do componente
    const nome = "Karoline"
    const idade = 18

    function checarMaiorIdade() {
        console.log("Chamou a função checarMaiorIdade")
        if (idade >= 10) {
            return "Maior de idade"
        } else {
            return "Menor de idade"
        }
    }

    function alerta() {
        console.log("Clicou no botão!!!")
        alert('Clicou no botão!!!!!')
    }


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>JavaScript Componente</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Idade + 40: {idade + 40}</Text>
      <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>

      <Button title='Enviar' onPress={alerta} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fd95d5',
        padding: 10,
        borderWidth: 10,
        borderColor: "#ff20a9",
        borderRadius: 10,
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