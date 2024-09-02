import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  input: {
    borderColor: '#ccc',
    width: '80%',
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#e5e9ea',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const registrarUsuario = async () => {
    try {
      const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email,
          password: senha,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Sucesso', 'vc cadastro');
        
      } else {
        Alert.alert('Error', result.message || 'An error occurred');
        
      }
    } catch (error) {
      Alert.alert('erro', 'vc n acerto');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Registro</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Insira o seu email aqui"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Insira o seu nome aqui"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="Insira a sua senha aqui"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Pressable style={styles.button} onPress={registrarUsuario}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
