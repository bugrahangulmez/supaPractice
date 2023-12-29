import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {supabase} from '../lib/supabase';
import {Button} from 'react-native-elements';

const Home = () => {
  return (
    <SafeAreaView>
      <Button
        title={'Get Data'}
        onPress={async () => {
          const {data, error} = await supabase
            .from('todo')
            .insert([{some_column: 'second', other_column: 'second'}])
            .select();

          console.log({data, error});
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
