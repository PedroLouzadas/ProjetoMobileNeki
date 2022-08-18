import React, { useState, useContext } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Switch } from "react-native";
import { Icon } from 'react-native-elements';
import { ContextLoginUser } from "../../Context/ContextLogin";
import AxiosInstance from "../../Api/AxiosInstance";

const Login = ({ route, navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [section, setSection] = useState(0);
    const [check, setCheck] = useState(false);
    const [login, setLogin] = useState([]);
    const {usuarioCON, setUsuarioCON} = useContext(ContextLoginUser);

    const [status, setStatus] = useState({
        type: "",
        mensagem: "",
      });

      let dados = {
        login: email,
        password: senha,
      }
      function ReceberLogin() {
        AxiosInstance
          .get(`/api/users`)
          .then((result) => {
            setLogin(result.data);
          })
          .catch((error) => {
            console.log("Erro ao carregar " + JSON.stringify(error));
          });
      }

      function VerificaLogin() {
        login.map((login) => {
          if (login.login === dados.login && login.password === dados.password) {
           setUsuarioCON(login.id)
           console.log("ID" + login.id)
           console.log("Usuario" + usuarioCON)
           return navigation.navigate("/home");
          }
          return setStatus({
            type: "error",
            mensagem: "Error: Credenciais inválidas!",
          });
        });
      }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    function enviarDados() {
        return navigation.navigate('Cadastro');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Log in
            </Text>
            <View style={styles.formulario}>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Username"
                    maxLength={10}
                />
                <View style={styles.inputCont}>
                <TextInput
                    style={styles.input2}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha"
                    maxLength={10}
                />
                <Icon style={styles.icone} name="eye" type="font-awesome" size={30} color={'#FFFFFF'} />
                </View>
            </View>
            <View style={styles.check} >
            <Text style={styles.titulo2}>
                Lembrar Senha
            </Text>
            <Switch
                trackColor={{ false: "#767577", true: '#3D5CFF' }}
                thumbColor={isEnabled ? '#4b4b63' : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>
            <TouchableOpacity
                onPress={() => {
                    VerificaLogin()
                }}
                style={styles.botaoEntrar2}>
                <Text style={styles.textEntrar}>LOGAR</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
            <Text style={styles.titulo4}>
            Não tem uma conta? 
            </Text>
            <TouchableOpacity
            onPress={() => {
                enviarDados()
            }}>
                <Text style={styles.titulo3}>Registre-se</Text>
            </TouchableOpacity>
            </View>
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
    inputCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 100,
    },
    titulo: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 30,
        display: 'flex',
        position: 'relative',
        bottom: 70,
    },
    titulo2: {
        fontWeight: 'bold',
        color: '#9191b3',
        fontSize: 17,
        display: 'flex',
        position: 'relative',
    
    },
    icone: {
        display: 'flex',
        marginTop: 20,
    },
    titulo3: {
        fontWeight: 'bold',
        color: '#9191b3',
        fontSize: 17,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: "center",
    },
    titulo4: {
        color: '#9191b3',
        fontSize: 17,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: "center",
    },
    footer: {
        alignItems: 'center',
        textAlignVertical: 'center',
        textAlign: "center",
        position: 'relative',
        top: 100,
    },
    formulario: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#4b4b63',
        height: 70,
        width: 300,
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
        right: 10,
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
        top: 70,
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
    check: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        top: 25,
    },
});

export default Login;