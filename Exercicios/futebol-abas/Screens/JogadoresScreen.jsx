import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Avatar, Text } from 'react-native-paper'

export default function JogadoresScreen(props) {

    const { nome, imagem, numero } = props

    const jogadores = [
        {
            nome: "Calleri",
            numero: 9,
            imagem: "https://i.pinimg.com/736x/99/bc/c1/99bcc184074ec58f35f91f5824ff18c5.jpg"
        },
        {
            nome: "Luciano",
            numero: 10,
            imagem: "https://i.pinimg.com/474x/b8/1c/29/b81c29a549a217488b517751362bc283.jpg"
        },
        {
            nome: "Lucas Moura",
            numero: 7,
            imagem: "https://i.pinimg.com/736x/09/bf/68/09bf6847f1dbc189d073b14fe11f5e28.jpg"
        },
        {
            nome: "Rafael",
            numero: 23,
            imagem: "https://i.pinimg.com/474x/e9/a3/e1/e9a3e136890d4ee9b2885e3892eac152.jpg"
        },
        {
            nome: "Arboleda",
            numero: 5,
            imagem: "https://i.pinimg.com/474x/2f/a5/f4/2fa5f43d8c0723404613721fae350aab.jpg"
        }
    ];

    return (
        <View style={styles.container}>

            <FlatList
                data={jogadores}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <View style={styles.textContainer}>
                                <Avatar.Image source={{ uri: item.imagem }} size={60} style={styles.avatar} />
                            
                                <Text style={styles.nome}>{item.numero} - {item.nome}</Text>
                            </View>
                    </Card>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ede7f6',
        padding: 16,
        paddingTop: 30,
      },
      card: {
        backgroundColor: '#8e24aa',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
      },
      avatar: {
        backgroundColor: '#b39ddb',
        marginRight: 12,
      },
      textContainer: {
        flex: 1,
        flexDirection: "row",
      },
      nome: {
        paddingTop: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f3e5f5',
      }
})