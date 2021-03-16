import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
            }}>
            <Text>A</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>B</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}>
            <Text>C</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>D</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text>A</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>B</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}>
            <Text>C</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>D</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', alignItems: 'stretch'},
});
