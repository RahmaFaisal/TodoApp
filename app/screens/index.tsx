import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home/home';
import ToDoList from './list';
import AddToDo from './addToDo';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';
import TextStyled from '../components/text';

const Stack = createStackNavigator();
const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2e0ce',
          },
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="list" component={ToDoList} />
        <Stack.Screen
          name="AddToDo"
          component={AddToDo}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f2e0ce',
            },
            headerTitle: '',
            header: ({navigation}) => (
              <Pressable onPress={()=>{navigation.goBack()}}>
                <Icon
                  name="arrow-back"
                  color={'#694c2f'}
                  size={20}
                  style={{marginLeft: 10}}
                />
              </Pressable>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
