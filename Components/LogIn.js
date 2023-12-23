import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView} from 'react-native'

const Login = ({navigation}) => {

const [username, onChangeUsername] = useState ('')
const [password, onChangePassword] = useState ('')
const [login, onChangeLogIn] = useState (false)

return (
<View style = {styles.container}
keyboardDismissMode = 'none'>
<KeyboardAvoidingView
behavior = "position">

    <Text style = {styles.headingSection} >
        Spongebob's Restaurant
    </Text>

    <Text style = {styles.infoSection}>
        Welcome to Spongebob's  Restaurant
    </Text>

    {login && (
    <Text style=  {styles.infoSection}> You are now logged in!</Text>
    )}

    {!login && (

    <Text style = {styles.infoSection}>
       Login to continue
    </Text>

    )}
    {!login && (
    <TextInput
    style = {styles.input}
        value = {username}
        onChangeText = {onChangeUsername}
        placeholder = 'User Name'
    />
    )}
    {!login && (
    <TextInput
     style = {styles.input}
        value = {password}
        onChangeText = {onChangePassword}
        placeholder = 'Password'
        secureTextEntry = {true}
    />
    )}

<Pressable onPress = { () => {onChangeLogIn (!login)}}>


{!login && (
<Pressable onPress = {() => navigation.navigate ('Welcome')}>
<Text style = {styles.logIn}>
Log In
</Text>
</Pressable>

)}
</Pressable>
</KeyboardAvoidingView>

</View>
)
}

export default Login

const styles = StyleSheet.create({ 
      container: { 
        flex: 1,
    backgroundColor: 'grey' 
      }, 
      input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: '#EDEFEE', 
        backgroundColor: '#F4CE14', 
      }, 
      messageInput: { 
        height: 100, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14', 
      }, 
      infoSection: { 
        fontSize: 25, 
        padding: 20, 
        marginVertical: 8, 
        color: 'white',
    backgroundColor: 'gray',
        textAlign: 'center',
     
}, 
  logIn: { 
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#F4CE14',
    borderColor: '#F4CE14',
    borderWidth: 2,
    borderRadius: 50,
    textAlign: 'center',

      }, 
      headingSection: { 
          padding:50,
      paddingTop: 100,
      fontSize: 25,
      textAlign: 'center',
      backgroundColor: 'yellow', 
      
      }, 
    });