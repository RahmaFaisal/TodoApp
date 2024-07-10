import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import TextStyled from '../text';


interface ButtonStyledProp {
    onClick:()=>void
    buttonText:string
}


const ButtonStyled = ({onClick,buttonText}:ButtonStyledProp) => {
  return (
    <Pressable style={Styles.button} onPress={() => onClick()}>
     <TextStyled text={buttonText}/>
    </Pressable>
  );
};

export default ButtonStyled;

const Styles = StyleSheet.create({

  button: {
    borderColor: '#694c2f',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: 100,
    marginHorizontal: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
