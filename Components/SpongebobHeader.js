import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native';

function SpongebobHeader () {
  return (
    <View>
    <Text style={headerStyles.container}> 
    Spongebob's Restaurant </Text>
    </View>
  );
}

export default SpongebobHeader

const headerStyles = StyleSheet.create ({
  container: {
    padding:50,
      paddingTop: 75,
      fontSize: 25,
      textAlign: 'center',
      backgroundColor: 'yellow'
  }
})
