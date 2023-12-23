import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import SpongebobHeader from './SpongebobHeader'

const WelcomeScreen = ( {navigation}) => {
    return (
<View style= {WelcomeStyles.container}> 
<SpongebobHeader/>

<Image 
style = {WelcomeStyles.logo}
source = {require ('../img/spongebobLogo.png')}>
</Image>

<Text style= {WelcomeStyles.text}>
Only the best in sea food at the bottom of the ocean
floor! We look forward to meeting you!
</Text>

<Pressable onPress = {() => navigation.navigate ("Menu")}>
 <Text style = {WelcomeStyles.menu}> View Menu </Text>
 </Pressable>
</View>

    )

}

export default  WelcomeScreen

const WelcomeStyles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },

    logo: {
    height: 125,
    width: 450,
    resizeMode: 'contain',
    },
    text: {
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: 50,
    color: 'white',
    paddingTop: 10 
            },
    menu: {
    fontSize: 25,
    textAlign: 'center',
    marginHorizontal: 50,
    color: 'yellow',
    paddingTop: 40, 
                        },
})