import react, { useState } from 'react'; 

import { View,Text,TextInput, Pressable, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const[email,setEmail] = useState('');
  const [password, setPassword] = useState('') ;

const handleLogin = () =>{
  if(true){
  navigation.navigate('HomeScreen');   
  }else{
   alert('Por favor, preencha todos os campos ') 
  }
};

return(
<view style={styles.container}>
<TextInput style={styles.input}
placeholder="Email"
value={email}
onChangeText={setEmail}


<TextInput style={styles.input}
placeholder="senha"
secureTextEntry={true}
value={password}
onChangeText={setPassword}

Pressable style={styles.button} onPress={handLogin}
 <text style={styles.buttonText}>Entrar</text>
 </pressable>
 </view>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});