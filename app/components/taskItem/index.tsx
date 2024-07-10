import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Task} from '../../models/task';
import TextStyled from '../text';
import IconButton from '../iconButton';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/user';
import Icon from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

interface TaskItemProps {
  item: Task;
}

export const TaskItem = ({item}: TaskItemProps) => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation<any>();
  const deleteItem = () => {
    Alert.alert('Warning', 'Are you sure you want to delete this task ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(deleteTask(item.id))},
    ]);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.containerItems}>
        <Icon name="tasklist" size={20} color={'#694c2f'} />
        <TextStyled text={item.desc} />
      </View>

      <View style={[Styles.containerItems, Styles.control]}>
        <IconButton
          iconName="mode-edit-outline"
          onClick={() =>navigate('AddToDo',{mode:'edit',item})}
          color="#1f324d"
        />
        <IconButton
          iconName="delete"
          onClick={() => {
            deleteItem();
          }}
          color="#e30707"
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '90%',
    borderColor: '#694c2f',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 'auto',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  containerItems: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  control: {
    marginLeft: 'auto',
  },
});
