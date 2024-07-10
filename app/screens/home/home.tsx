import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {setName} from '../../store/user';
import { useNavigation } from '@react-navigation/native';
import TextStyled from '../../components/text';
import ButtonStyled from '../../components/button';
import InputStyled from '../../components/input';

const Home = () => {
  const [textValue, settextValue] = useState('');
  const dispatch = useDispatch();
  const navigation=useNavigation<any>()

  const onClickGo=()=>{
    dispatch(setName(textValue))
    navigation.navigate('list')

  }

  return (
    <View style={Styles.backgroundStyle}>
      <View style={Styles.container}>
        <TextStyled text='Heyy !'/>
        <InputStyled textValue={textValue} placeholder='Please enter your name' onChangeText={settextValue} />
        <ButtonStyled buttonText={'Go'} onClick={onClickGo}/>
      </View>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    gap: 10,
  }
});
