import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Jogadores from './Jogadores' 

export default function Time(props) {

    const  { nome, anoFundacao, mascote, imagem, jogadores } = props

  return (
    <Card>
        <Card.Title title={nome} subtitle={anoFundacao} />
        <Card.Content>
            <Text>Mascote: {mascote}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: imagem}}/>
        <Card.Actions>
        <FlatList 
            horizontal
            data= {jogadores}
            renderItem={({ item }) => (
                <Jogadores
                nome= {item.nome}
                imagem= {item.imagem}
                />
            )}
            />
    
        </Card.Actions>
      </Card>
  )
}

const styles = StyleSheet.create({
    
})