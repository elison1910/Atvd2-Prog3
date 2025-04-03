import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, Avatar } from 'react-native-elements';

function App() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        source={{ uri: 'https://i.pravatar.cc/150' }} // Avatar temporário
        containerStyle={styles.avatar}
      />

      <Input placeholder="Email" containerStyle={styles.input} />
      <Input placeholder="Senha" secureTextEntry containerStyle={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

function Login() {
  return (
    <View style={styles.container}>

      <Text>CADASTRO</Text> 
     
      <Input placeholder="nome" secureTextEntry containerStyle={styles.input} />
      <Input placeholder="Email" containerStyle={styles.input} />
      <Input placeholder="Senha" secureTextEntry containerStyle={styles.input} />

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default function Envio() {
  return (
    <View style={styles.container}>

      <Text>Esqueceu a Senha</Text> 

      <Input placeholder="Email" containerStyle={styles.input} />

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Verde do protótipo
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonSecondary: {
    backgroundColor: '#34A853', // Tom de verde diferente para "Cadastrar-se"
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
