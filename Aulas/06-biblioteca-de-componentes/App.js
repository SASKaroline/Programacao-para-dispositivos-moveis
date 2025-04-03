import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import {PaperProvider, Card, Title, Paragraph, Text, Divider, Button} from 'react-native-paper'

export default function App() {
  
  const listaCards = [
      {
        Titulo: "Card 1",
        Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
        imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg' 
      },
      {
        Titulo: "Card 2",
        Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
        imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg'
      },
      {
        Titulo: "Card 3",
        Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
        imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg'
      },
      {
        Titulo: "Card 4",
        Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
        imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg'
      }
    
  ]

  return (

    <PaperProvider>
      <ScrollView>
      <View style={styles.container}>
        
      <StatusBar style="auto" />
        
      <FlatList 
        horizontal
        data={listaCards}
        renderItem={({ item }) => 
        <Card style={{ marginBottom: 10}}>
          <Card.Content>
            <Title>{item.Titulo}</Title>
            <Paragraph>{item.Descrição}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: item.imagem}}/>
        </Card>}/>

        <FlatList 
        data={listaCards}
        renderItem={({ item }) => 
        <Card style={{ marginBottom: 10}}>
          <Card.Content>
            <Title>{item.Titulo}</Title>
            <Paragraph>{item.Descrição}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: item.imagem}}/>
        </Card>}/>
        

         {/* <Button mode='contained' onPress={() => alert('clicou')}>Clicar aqui!</Button>
         <Button mode='contained-tonal' onPress={() => alert('clicou')}>Clicar aqui!</Button>
         <Button mode='elevated' onPress={() => alert('clicou')}>Clicar aqui!</Button>
         <Button mode='outlined' onPress={() => alert('clicou')}>Clicar aqui!</Button>
         <Button mode='text' onPress={() => alert('clicou')}>Clicar aqui!</Button>
        
        
         <Text variant='displayLarge'>Taylor Swift</Text>
         <Divider style={{ width: '90%'}}></Divider>
         <Text variant='headlineLarge'>Taylor Swift</Text>
         <Divider style={{ width: '90%'}}></Divider>
         <Text variant='titleLarge'>Taylor Swift</Text>
         <Divider style={{ width: '90%'}}></Divider>
         <Text variant='bodyLarge'>Taylor Swift</Text>
         <Divider style={{ width: '90%'}}></Divider>
         <Text variant='labelLarge'>Taylor Swift</Text>
         <Divider style={{ width: '90%'}}></Divider>
        
         <Text>Taylor Swift</Text>

         <Card style={{margin: 30}}>
           <Card.Title title=" Melhor cantora do mundo">
             <Title>
               Melhor cantora do mundo
             </Title>
           </Card.Title>
           <Card.Content>
             <Title>
               Taylor Swift
             </Title>

             <Paragraph>
             I guess you never know, never know
             And if you wanted me, you really should've showed
             And if you never bleed, you're never gonna grow
             And it's alright now
             But we were something, don't you think so?
             Roaring 20s, tossing pennies in the pool
             And if my wishes came true
             It would've been you
             In my defense, I have none
             For never leaving well enough alone
             But it would've been fun
             If you would've been the one
             </Paragraph>
           </Card.Content>
          
           <Card.Actions>
             <Text>Teste</Text>
           </Card.Actions>
         </Card> */}

      
      </View>
      </ScrollView>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
