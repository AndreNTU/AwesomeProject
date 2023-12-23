import React, {useState} from 'react'
import { View, Text, StyleSheet, SectionList, Pressable } from 'react-native';
import SpongebobHeader from './SpongebobHeader';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [ 
    {name:'Bread', price: '$5.00'},
    {name:'Fish Soup',price: '$5.00'},
    {name: 'Squid', price: '$7.50'},
    {name: 'Prawns', price: '$5.00'},
    {name: 'Bread Sticks', price:'$5.00'},
    {name: 'Sandys Cheek', price: '$8.50'}
    ]
  },
{
  title: 'Main Dishes',
  data: [
  {name: 'Krabby Patty', price: '$10.00'},
     {name: 'Sea Bass', price: '$14.00'}, 
     {name: 'Double Krabby Patty', price: '$11.00'},
     {name: 'Smoked Salmon', price: '$15.50'},
    {name: 'Sea Horse', price: '$15.50'},
     {name: 'Caesar Salad', price: '$10.00'}
  ]
},
{
  title: 'Sides',
  data: [
  {name: 'Fries', price: '$3.00'},
  {name: 'Sand Fries', price: '$4.00'},
  {name: 'Buttered Rice', price: '$3.75'},
  {name: 'Plain Rice', price: '$3.00'},
  {name: 'Lobster Slices', price: '$4.00'},
  {name: 'Bikini Salad', price: '$4.00' }
  ]
},

{
  title: 'Desserts',
  data: [
    {name: 'Tiramisu', price: '$5.00'},
  {name: 'Panna Cotta', price: '$5.00'},
  ]
}
]


const Item = ({ name, price}) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
)

const Separator = () => <View style={menuStyles.separator} />
const Footer = () => <Text style = {menuStyles.footerText}> All Rights Reserved by Spongebob 2023 </Text>

const MenuItems = () => {
  const [showMenu, setShowMenu] = useState (false)
  const renderItem = ({ item }) => <Item name={item.name} 
  Item price ={item.price}
  />;

  const renderSectionHeader = ({section: {title}}) => (
    <Text style = {menuStyles.headerText}>{title}</Text>
  )

  return (
    <View style={menuStyles.container}>

       <SpongebobHeader/>

    {!showMenu && (
    <Text style= {menuStyles.infoSection}>
Only the best in sea food at the bottom of the ocean
floor! We look forward to meeting you.
    </Text>
    )}

    <Pressable style = {menuStyles.button}
      onPress = {() => {
      setShowMenu (!showMenu) }}>

      <Text style = {menuStyles.button}>
        {showMenu ? 'Back' : 'View Menu'}
      </Text>

    </Pressable>
    {showMenu && (

      <SectionList
        sections = {menuItemsToDisplay}
        renderItem = {renderItem}
        renderSectionHeader = {renderSectionHeader}
        ListFooterComponent = {Footer} 
        ItemSeparatorComponent={Separator}
        />
         )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
    button: {
      fontSize: 20,
      padding: 6,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 1,
      borderRadius: 10,
      textAlign: 'center'
  },
  headerText: {
    color: '#f0f8ff',
    backgroundColor: 'black',
    fontSize: 25,
    textAlign: 'center'
  },
  separator: {
    borderBottomWidth: 0.25,
    borderColor: '#EDEFEE',
  },

  infoSection: {
    fontSize: 22,
    padding: 30,
    marginVertical: 10,
    color: '#EDEFEE',
    textAlign: 'center',
  },

  footerText: {
    color: 'black',
    backgroundColor: 'darkgoldenrod',
    fontSize: 12.5,
    textAlign: 'center'
  },
});

export default MenuItems;