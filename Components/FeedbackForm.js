import React, {useState} from 'react'
import {ScrollView, StyleSheet, Text, TextInput, Button, Alert, KeyboardAvoidingView} from 'react-native'

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = useState ('')
  const [lastName, onChangeLastName] = useState ('')
  const [message, onChangeMessage] = useState ('')
  const [phoneNumber, onChangePhoneNumber] = useState ('')

return (
  <ScrollView style={styles.container}
  keyboardDismissMode = 'none'
  >
  <KeyboardAvoidingView>
  
    <Text style={styles.headingSection}>
      Spongebob's Restaurant
    </Text>

    <Text style={styles.infoSection}>
      How was your visit to Spongebob's Restaurant?
    </Text>

    <Text style={styles.infoSection}>
      We would love to hear about your experience with us
      down at the bottom of the ocean!
    </Text>

    <TextInput 
        style={styles.input} 
        value={firstName} 
        placeholder = 'First Name'
        onChangeText={onChangeFirstName} 
      />

    <TextInput
      style={styles.input}
      value={lastName}
      placeholder = 'Last Name'
      onChangeText= {onChangeLastName}
    />

<TextInput
      style={styles.input}
      value={phoneNumber}
      placeholder = 'Phone Number'
      keyboardType = 'phone-pad'
      onChangeText= {onChangePhoneNumber}
    />

<TextInput
      style={styles.messageInput}
      value={message}
      placeholder = 'Message'
      multiline={true}
      maxLength = {250}
      onChangeText= {onChangeMessage}
    />

    <Button
      title = "Submit"
      color = "black"
      onPress={() => Alert.alert('Thank you','Form Submitted!', [
        {text: 'Got It'}
      ])}
    />

    </KeyboardAvoidingView>
  </ScrollView>
)
}

export default FeedbackForm

const styles = StyleSheet.create({ 
    container: { 
      flex: 1,
  backgroundColor: 'gray', 
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
  button: {

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
      fontSize: 20, 
      padding: 20, 
      marginVertical: 8, 
      color: 'white', 
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