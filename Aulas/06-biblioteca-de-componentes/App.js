import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import {PaperProvider, Text} from 'react-native-paper'
import Estados from './componentes/Estados';

export default function App() {
  
  const listaEstadosMunicipios = [
    {
      nome: 'Rio de Janeiro',
      sigla: 'RJ',
      imagem: 'https://i.pinimg.com/736x/6b/17/4b/6b174b8598dc4aa0ae8d26c5b7fd1289.jpg',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      municipios: [
        {
          nome: 'Rio de Janeiro',
          imagem: 'https://i.pinimg.com/736x/20/45/c4/2045c43d987cabc1e6466bacf5d6774e.jpg'
        },
        {
          nome: 'Niterói',
          imagem: 'https://i.pinimg.com/736x/da/f7/91/daf791858739502a013f6100283ee3cb.jpg'
        },
        {
          nome: 'Petrópolis',
          imagem: 'https://i.pinimg.com/736x/f9/f9/f9/f9f9f93ec01ea1671fdf2520ed960e95.jpg'
        },
        {
          nome: 'Angra dos Reis',
          imagem: 'https://i.pinimg.com/736x/9a/1a/7d/9a1a7d35eb8ee4cdef564c0880ba1bf1.jpg'
        },
        {
          nome: 'Cabo Frio',
          imagem: 'https://i.pinimg.com/736x/37/6e/4a/376e4abf94c33a77937ca7c2059968c2.jpg'
        }
      ]
    },
    {
      nome: 'São Paulo',
      sigla: 'SP',
      imagem: 'https://i.pinimg.com/736x/86/fc/25/86fc252ba1f5e2607ff4f2f8c1887d1b.jpg',
      descricao: 'São Paulo é o estado mais populoso do Brasil, com uma economia diversificada e forte.',
      municipios: [
        {
          nome: 'São Paulo',
          imagem: 'https://i.pinimg.com/236x/30/2f/43/302f43171050d73bc60b7e993fe7c619.jpg'
        },
        {
          nome: 'Campinas',
          imagem: 'https://i.pinimg.com/736x/d9/cb/21/d9cb21d988c3e89ce09a750d783e8f1a.jpg'
        },
        {
          nome: 'Santos',
          imagem: 'https://i.pinimg.com/236x/66/86/23/668623c5ca1d698573cdd027c787eee8.jpg'
        },
        {
          nome: 'Sorocaba',
          imagem: 'https://i.pinimg.com/236x/12/5c/21/125c21136efc4b0b877dfc6b147dfb9d.jpg'
        },
        {
          nome: 'Ribeirão Preto',
          imagem: 'https://i.pinimg.com/736x/c4/42/52/c442528b08f65d1584c168b1eabd76fa.jpg'
        }
      ]
    },
    {
      nome: 'Minas Gerais',
      sigla: 'MG',
      imagem: 'https://i.pinimg.com/736x/1d/85/ee/1d85eeb2b1a1dd428033370b0241c600.jpg',
      descricao: 'Minas Gerais é conhecido por sua rica história, culinária e belas paisagens.',
      municipios: [
        {
          nome: 'Belo Horizonte',
          imagem: 'https://i.pinimg.com/236x/8a/7a/7b/8a7a7ba17c4f44c002a23969cd94ffb9.jpg'
        },
        {
          nome: 'Ouro Preto',
          imagem: 'https://i.pinimg.com/236x/45/00/aa/4500aa767a0d1329ba7a6db498025e89.jpg'
        },
        {
          nome: 'Uberlândia',
          imagem: 'https://i.pinimg.com/736x/dd/f6/07/ddf607898d8f509aa96a726f22d0affc.jpg'
        },
        {
          nome: 'Juiz de Fora',
          imagem: 'https://i.pinimg.com/736x/bf/ee/92/bfee92af771fae2089cf25ea5cf6cb5a.jpg'
        },
        {
          nome: 'Montes Claros',
          imagem: 'https://i.pinimg.com/736x/7b/ea/6e/7bea6e1c64a673e2779449388e74d91f.jpg'
        }
      ]
    }
  ]

  // const listaCards = [
  //     {
  //       Titulo: "Card 1",
  //       Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
  //       imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg' 
  //     },
  //     {
  //       Titulo: "Card 2",
  //       Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
  //       imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg'
  //     },
  //     {
  //       Titulo: "Card 3",
  //       Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
  //       imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg'
  //     },
  //     {
  //       Titulo: "Card 4",
  //       Descrição: "I guess you never know, never know And if you wanted me, you really should've showed And if you never bleed, you're never gonna grow And it's alright now",
  //       imagem: 'https://i.pinimg.com/736x/a3/1f/af/a31faf8843f564b0212e2b4f985ce94c.jpg'
  //     }
    
  // ]

   return (

     <PaperProvider>
       <View style={styles.container}>
          <FlatList 
          data={listaEstadosMunicipios}
          renderItem={({ item }) => (
            <Estados 
            nome= {item.nome}
            sigla= {item.sigla}
            descricao= {item.descricao}
            imagem= {item.imagem}
            municipios= {item.municipios}
            />
          )}
          />
       <StatusBar style="auto" />
        
      {/* <FlatList 
  //       horizontal
  //       data={listaCards}
  //       renderItem={({ item }) => 
  //       <Card style={{ marginBottom: 10}}>
  //         <Card.Content>
  //           <Title>{item.Titulo}</Title>
  //           <Paragraph>{item.Descrição}</Paragraph>
  //         </Card.Content>
  //         <Card.Cover source={{ uri: item.imagem}}/>
  //       </Card>}/>

  //       <FlatList 
  //       data={listaCards}
  //       renderItem={({ item }) => 
  //       <Card style={{ marginBottom: 10}}>
  //         <Card.Content>
  //           <Title>{item.Titulo}</Title>
  //           <Paragraph>{item.Descrição}</Paragraph>
  //         </Card.Content>
  //         <Card.Cover source={{ uri: item.imagem}}/>
  //       </Card>}/> */}
        

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
