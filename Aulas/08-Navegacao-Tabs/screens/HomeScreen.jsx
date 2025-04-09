import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Paragraph, Text, Title } from 'react-native-paper' //Importando o Text do react native paper

export default function HomeScreen() {
  return (
    //Aplicar o estilo na VIEW
    <View style={styles.conteiner}>
      <Text variant='headlineLarge' style={{ textAlign: "center"}} > Tela de inicio </Text>

      {/* Criando Card 1*/}
      <Card style={{ width: '90%' }}>

        <Card.Content>

            <Title>Taylor Swift</Title>
            <Paragraph>
                I guess you never know, never know
                And if you wanted me, you really should've showed
                And if you never bleed, you're never gonna grow
                And it's alright now
            </Paragraph>

        </Card.Content>

        <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/a5/f2/b4/a5f2b4235b4ccc11b58f89d0cbaf2c1e.jpg'}}/>

      </Card>


      {/* Criando Card 2*/}
      <Card style={{ width: '90%' }}>

        <Card.Content>

            <Title>Taylor Swift</Title>
            <Paragraph>
            But we were something, don't you think so?
            Roaring 20s, tossing pennies in the pool
            And if my wishes came true
            It would've been you
            </Paragraph>

        </Card.Content>

        <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/a5/f2/b4/a5f2b4235b4ccc11b58f89d0cbaf2c1e.jpg'}}/>
        
      </Card>


      {/* Criando Card 3*/}
      <Card style={{ width: '90%' }}>

        <Card.Content>

            <Title>Taylor Swift</Title>
            <Paragraph>
                In my defense, I have none
                For never leaving well enough alone
                But it would've been fun
                If you would've been the one
            </Paragraph>

        </Card.Content>

        <Card.Cover source={{ uri: 'https://i.pinimg.com/736x/a5/f2/b4/a5f2b4235b4ccc11b58f89d0cbaf2c1e.jpg' }}/>
        
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({})