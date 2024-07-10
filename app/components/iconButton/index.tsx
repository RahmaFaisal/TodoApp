import React from 'react'
import {   Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface IconButtonProps {

  iconName:string,
  onClick:()=>void,
  color?:string

}


const IconButton = ({iconName,onClick ,color="#4d4232"}:IconButtonProps) => {
  return (
   <Pressable  onPress={onClick}>
      <Icon name={iconName} size={20} color={color} />
   </Pressable>
  )
}

export default IconButton


const Styles=StyleSheet.create({

})