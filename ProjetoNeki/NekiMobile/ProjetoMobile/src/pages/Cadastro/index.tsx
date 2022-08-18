import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

const Cadastro = ({ route, navigation }) => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    function enviarDados() {
        return navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Sign Up
            </Text>
            <View style={styles.formulario}>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Username"
                    maxLength={10}
                />
                <TextInput
                    style={styles.input2}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha"
                    maxLength={10}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    enviarDados()
                }}
                style={styles.botaoEntrar2}>
                <Text style={styles.textEntrar}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f1f39',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 30,
        display: 'flex',
        position: 'relative',
        bottom: 120,
    },
    formulario: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#4b4b63',
        height: 70,
        width: 250,
        padding: 5,
        position: 'relative',
        fontWeight: 'bold',
        borderRadius: 10,
        fontSize: 16,
        color: '#FFF',

    },
    input2: {
        backgroundColor: '#4b4b63',
        height: 70,
        width: 250,
        padding: 5,
        position: 'relative',
        top: 10,
        fontWeight: 'bold',
        borderRadius: 10,
        fontSize: 16,
        color: '#FFF',
    },
    botaoEntrar2: {
        backgroundColor: '#3D5CFF',
        width: 250,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
        textAlign: 'center',
        top: 120,
    },
    textEntrar: {
        fontFamily: 'Roboto',
        height: 20,
        color: '#ffffff',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Cadastro;