import React from 'react'
import { Text ,StyleSheet} from 'react-native'


interface TextStyledProps{
    
    text:string,
    extraStyle?:any
}


const TextStyled = ({text,extraStyle={}}:TextStyledProps) => {
  return (
    <Text style={[Styles.text,extraStyle]}>{text}</Text>
  )
}

export default TextStyled


const Styles = StyleSheet.create({
    text: {
      color: '#694c2f',
      fontWeight: 'bold',
      maxWidth:'100%'
    }
  });
  