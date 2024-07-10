import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import TextStyled from '../../components/text';
import IconButton from '../../components/iconButton';
import {useNavigation} from '@react-navigation/native';
import {TaskItem} from '../../components/taskItem';

const ToDoList = () => {
  const {name, taskList} = useSelector((state: RootState) => state.user);
  const {navigate} = useNavigation<any>();
  const onAdd = () => {
    navigate('AddToDo',{mode:'add'});
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TextStyled text={`Welcome ${name} !`} extraStyle={Styles.extraText} />
        <IconButton iconName="add" onClick={() => onAdd()} color="#1f324d" />
      </View>
      {taskList.length ? (
        <FlatList
          data={taskList}
          renderItem={({item}) => <TaskItem item={item} />}
        />
      ) : (
        <TextStyled text="Start adding new tasks to be done." extraStyle={Styles.noTasksStyle}/>
      )}
    </View>
  );
};

export default ToDoList;

const Styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  extraText: {
    color: '#1f324d',
  },
  noTasksStyle:{
    marginHorizontal:'auto',
    marginTop:'30%'
  }
});
