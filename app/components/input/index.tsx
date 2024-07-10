import React from 'react'
import { StyleSheet, TextInput } from 'react-native';


interface InputStyledProps {

    textValue:string,
    placeholder:string,
    onChangeText:(value:string)=>void
}


const InputStyled = ({textValue , placeholder ,onChangeText}:InputStyledProps) => {
  return (
    <TextInput
    value={textValue}
    placeholder={placeholder}
    onChangeText={value => onChangeText(value)}
    style={Styles.input}
    keyboardAppearance={'default'}
    keyboardType={'default'}
  />
  )
}

export default InputStyled


const Styles = StyleSheet.create({
    input: {
      width: '100%',
      borderColor: '#694c2f',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
    },
  });
  