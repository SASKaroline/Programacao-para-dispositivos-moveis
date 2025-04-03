import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Municipio from './Municipio'

export default function Estados(props) {

    const  { nome, sigla, imagem, descricao, municipios } = props

  return (
      <Card>
        <Card.Title title={nome} subtitle={sigla} />
        <Card.Content>
            <Text>Descrição: {descricao}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: imagem}}/>
        <Card.Actions>
            <FlatList 
            horizontal
            data= {municipios}
            renderItem={({ item }) => (
                <Municipio
                nome= {item.nome}
                imagem= {item.imagem}
                />
            )}
            />
        </Card.Actions>
      </Card>
  )
}

const styles = StyleSheet.create({})