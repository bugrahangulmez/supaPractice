import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/constants';
import {Button} from 'react-native-elements';
import moment from 'moment';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {setRefresh, setTask, setTodoList} from '../redux/features/todoSlice';
import {supabase} from '../lib/supabase';

const CreateTodo = () => {
  const dispatch = useAppDispatch();

  const {todoList, refresh} = useAppSelector(store => store.todo);
  const user = useAppSelector(store => store.user);

  const [todo, setTodo] = useState<{
    title: string;
    description: string;
    hour?: number;
    minute?: number;
  }>({
    title: '',
    description: '',
    hour: 0,
    minute: 0,
  });

  const handleCreateTodo = async () => {
    const {data, error} = await supabase.from('todo').insert([
      {
        email: user.email,
        user_id: user.id,
        task: todo.title,
        task_desc: todo.description,
        isDone: false,
      },
    ]);

    if (error) {
      Alert.alert(error.message);
      return;
    }
    console.log(data);
    dispatch(setRefresh(!refresh));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoFocus={false}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onChangeText={text => {
          setTodo(prev => ({
            ...prev,
            title: text,
          }));
        }}
        placeholder="Task title"
        placeholderTextColor={'gray'}
        style={{
          width: SCREEN_WIDTH * 0.9,
          height: SCREEN_HEIGHT * 0.05,
          borderRadius: 8,
          borderWidth: 0.5,
          marginTop: SCREEN_HEIGHT * 0.04,
          paddingHorizontal: SCREEN_WIDTH * 0.02,
        }}
      />
      <TextInput
        autoFocus={false}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        onChangeText={text => {
          setTodo(prev => ({
            ...prev,
            description: text,
          }));
        }}
        placeholder="Task description"
        placeholderTextColor={'gray'}
        style={{
          width: SCREEN_WIDTH * 0.9,
          height: SCREEN_HEIGHT * 0.05,
          borderRadius: 8,
          borderWidth: 0.5,
          marginTop: SCREEN_HEIGHT * 0.04,
          paddingHorizontal: SCREEN_WIDTH * 0.02,
        }}
      />
      {/* <View
        style={{
          flexDirection: 'row',
          gap: SCREEN_WIDTH * 0.05,
        }}>
        <TextInput
          autoFocus={false}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          onChangeText={text => {
            setTodo(prev => ({
              ...prev,
              hour: Number(text),
            }));
          }}
          placeholder="12"
          placeholderTextColor={'gray'}
          style={{
            width: SCREEN_WIDTH * 0.1,
            height: SCREEN_WIDTH * 0.1,
            borderRadius: 8,
            borderWidth: 0.5,
            marginTop: SCREEN_HEIGHT * 0.05,
            padding: SCREEN_WIDTH * 0.026,
          }}
        />
        <TextInput
          autoFocus={false}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          onChangeText={text => {
            setTodo(prev => ({
              ...prev,
              minute: Number(text),
            }));
          }}
          placeholder="00"
          placeholderTextColor={'gray'}
          style={{
            width: SCREEN_WIDTH * 0.1,
            height: SCREEN_WIDTH * 0.1,
            borderRadius: 8,
            borderWidth: 0.5,
            marginTop: SCREEN_HEIGHT * 0.05,
            padding: SCREEN_WIDTH * 0.026,
          }}
        />
      </View> */}
      <Button
        onPress={handleCreateTodo}
        title={'Create Todo'}
        style={{
          width: SCREEN_WIDTH * 0.9,
          marginTop: SCREEN_HEIGHT * 0.04,
        }}
      />
    </SafeAreaView>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
