import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {supabase} from '../lib/supabase';
import {Button} from 'react-native-elements';
import {useAppSelector} from '../redux/hooks';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/constants';

const Home = () => {
  interface Todo {
    email: string;
    id: number;
    isDone: boolean;
    task: string;
    task_desc: string;
    user_id: string;
  }

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const {refresh} = useAppSelector(store => store.todo);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const {data, error} = await supabase.from('todo').select('*');
      if (error) {
        Alert.alert(error.message);
        return;
      }
      console.log(data);
      setTodoList(data);
      setLoading(false);
    })();
  }, [refresh]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
      }}>
      <FlatList
        data={todoList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                width: SCREEN_WIDTH * 0.9,
                height: SCREEN_HEIGHT * 0.1,
                borderWidth: 1,
                borderRadius: 8,
                marginTop: SCREEN_HEIGHT * 0.03,
                justifyContent: 'center',
                padding: SCREEN_WIDTH * 0.05,
              }}>
              <Text>{item.task}</Text>
              <Text>{item.task_desc}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
