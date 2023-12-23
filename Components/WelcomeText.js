import * as React from 'react'
import {ScrollView,Text,StyleSheet} from 'react-native'

const WelcomeText = () => {
    return(
        <ScrollView horizontal = {false} 
        style = {welcomeStyles.container}>
            <Text style = {welcomeStyles.text}>
'Who lives in a pineapple under the sea?
SpongeBob SquarePants!
Absorbent and yellow and porous is he
SpongeBob SquarePants!
If nautical nonsense be something you wish
SpongeBob SquarePants!
Then drop on the deck and flop like a fish!
SpongeBob SquarePants!'
            </Text>
        </ScrollView>
    )
}

export default WelcomeText

const welcomeStyles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
fontSize: 50,
                textAlign: 'center',
                marginHorizontal: 50
    }
  })