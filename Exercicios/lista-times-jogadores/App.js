import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';
import Time from './Componentes/Time';

export default function App() {

  const times = [
    {
      nome: "São Paulo",
      anoFundacao: 1930,
      mascote: "Santo Paulo",
      imagem: "https://i.pinimg.com/736x/6b/e9/76/6be97615185858cee9e0905d0590e796.jpg",
      jogadores: [
      { nome: "Lucas Moura", numero: 7, imagem: "https://i.pinimg.com/474x/ef/fa/75/effa75f07d8e767724000a13c8a36edb.jpg" },
      { nome: "Oscar", numero: 11, imagem: "https://i.pinimg.com/736x/18/be/63/18be639db3a782293733073ed4fd2335.jpg" },
      { nome: "Pablo Maia", numero: 29, imagem: "https://i.pinimg.com/736x/1d/ae/64/1dae64c6c00e8901e97f8250f75c8b83.jpg" },
      { nome: "Calleri", numero: 9, imagem: "https://i.pinimg.com/474x/99/bc/c1/99bcc184074ec58f35f91f5824ff18c5.jpg" },
      { nome: "Arboleda", numero: 5, imagem: "https://i.pinimg.com/474x/2f/a5/f4/2fa5f43d8c0723404613721fae350aab.jpg" },
      
      ],
    },
    {
    nome: "Flamengo",
    anoFundacao: 1895,
    mascote: "Urubu",
    imagem: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    jogadores: [
    { nome: "Gabriel Barbosa", numero: 9, imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg" },
    { nome: "Arrascaeta", numero: 14, imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg" },
    { nome: "Everton Ribeiro", numero: 7, imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg" },
    { nome: "David Luiz", numero: 23, imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg" },
    { nome: "Pedro", numero: 21, imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg" },
    ],
    },
    {
    nome: "Vasco",
    anoFundacao: 1944 ,
    mascote: "Almirante",
    imagem: "https://i.pinimg.com/236x/01/1f/31/011f317c76941ce53a2addcc9cfbf84a.jpg",
    jogadores: [
    { nome: "David", numero: 29, imagem: "https://lncimg.lance.com.br/uploads/2024/08/AGIF24071810385399-scaled-aspect-ratio-512-320.jpg" },
    { nome: "Rayan", numero: 77, imagem: "https://ds-images.bolavip.com/news/image/1200/740/?src=https://images.bolavip.com/webp/br/full/BBR_20231130_BBR_269603_AGIF23062220344928-e1701359102109.webp" },
    { nome: "Adson", numero: 28, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QFDdzMnw_vDA-lMyVWN-AV0wMikX5oYSQ&s" },
    { nome: "Loide Augusto", numero: 45, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_wVppSoXLSFa_TDErFfi05j9uNW4cSV1IQQH6C2e4KuVmhf9954qD4ozBnSrMAaVTio&usqp=CAU" },
    { nome: "Puma Rodríguez", numero: 2, imagem: "https://pbs.twimg.com/media/FpvGvFQXgAIRhwu.jpg:large" },
    ],
    },
    {
    nome: "Atlético Mineiro",
    anoFundacao: 1908,
    mascote: "Galo",
    imagem: "https://i.pinimg.com/236x/0b/00/31/0b0031de783db64c86272078ba9eb72e.jpg",
    jogadores: [
    { nome: "Hulk", numero: 7, imagem: "https://i.pinimg.com/474x/ff/9b/38/ff9b384ca6fd51ce56afbdfe14e5b67d.jpg" },
    { nome: "Nacho Fernández", numero: 26, imagem: "https://i.pinimg.com/474x/63/fa/af/63faaf414f6278f7187f73bad233ccf2.jpg" },
    { nome: "Everson", numero: 22, imagem: "https://i.pinimg.com/236x/2d/2f/f8/2d2ff8cad95ac498721d23269ba9540c.jpg" },
    { nome: "Keno", numero: 11, imagem: "https://i.pinimg.com/236x/6b/1c/c2/6b1cc2d9050291b69b7e6b3be1341a8a.jpg" },
    { nome: "Jair", numero: 8, imagem: "https://i.pinimg.com/236x/f8/55/29/f8552940089ced07181f7cbff4d6b7f7.jpg" },
    ],
    },
    ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text variant='displayMedium' style={{ marginBottom: 20}}>Lista de Times</Text>

        <FlatList
          data={times}
          renderItem={({ item }) => (
            <Time
              nome={item.nome}
              anoFundacao={item.anoFundacao}
              mascote={item.mascote}
              imagem={item.imagem}
              jogadores={item.jogadores}
            />
          )}
        />


      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: '#c1a2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
