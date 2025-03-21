import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
    const nome = "Karoline"
    const idade = 18

    function exibirNome() {
        return nome
    }

    function checarMaiorIdade() {
        if(idade >= 18){
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }
    }

    return (
        <View>
            <Text>JavaScriptComponente</Text>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Nome: {exibirNome()}</Text>
            <Text>Resultado: {25 + 30}</Text>
            <Text>Idade: {idade + 30}</Text>
            <Text>Check 18+: {checarMaiorIdade()}</Text>
            <Text>Check 18+: {idade >= 18 ? "Maior de Idade" : "Menor de Idade"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})