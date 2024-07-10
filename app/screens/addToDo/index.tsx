import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextStyled from '../../components/text';
import InputStyled from '../../components/input';
import ButtonStyled from '../../components/button';
import {useDispatch} from 'react-redux';
import {addTask, updateTask} from '../../store/user';
import {useNavigation, useRoute} from '@react-navigation/native';
const Strings: {[key: string]: any} = {
  edit: {
    headerText: 'Update your task',
    buttonText: 'Update',
  },
  add: {
    headerText: 'Enter your new task',
    buttonText: 'Add',
  },
};
const AddToDo = () => {
  const [textValue, setTextValue] = useState('');
  const dispatch = useDispatch();
  const {navigate} = useNavigation<any>();
  const route = useRoute<any>();
  const mode = route.params?.mode;

  useEffect(() => {
    mode == 'edit' && setTextValue(route.params?.item.desc);
  }, [mode]);

  const addNewTask = () => {
    if (textValue.trim().length != 0) {
      if (mode == 'add') {
        dispatch(addTask(textValue));
      } else {
        dispatch(updateTask({textValue, id: route.params?.item.id}));
      }
      navigate('list');
    }
  };

  return (
    <View style={Styles.backgroundStyle}>
      <View style={Styles.container}>
        <TextStyled text={Strings[mode].headerText} />
        <InputStyled
          textValue={textValue}
          placeholder=""
          onChangeText={setTextValue}
        />
        <ButtonStyled
          onClick={addNewTask}
          buttonText={Strings[mode].buttonText}
        />
      </View>
    </View>
  );
};

export default AddToDo;

const Styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    padding: 10,
  },
  container: {
    width: '80%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    gap: 10,
  },
});
