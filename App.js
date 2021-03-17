import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text>1</Text>
        </View>
        {/* bot   */}
        <View style={styles.bot}>
          <View style={styles.botColumn2}>
            <Text>2</Text>
          </View>
          <View style={styles.botColumn3}>
            <View style={styles.botColumn3Row1}>
              <Text>3</Text>
            </View>
            <View style={styles.botColumn3Row2}>
              <View style={styles.botColumn3Row2Row1}>
                <Text>4</Text>
              </View>
              <View style={styles.botColumn3Row2Row2}>
                <Text>5</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  top: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ed1b24',
  },
  //bot
  bot: {
    flex: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  botColumn2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fef102',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botColumn3: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  botColumn3Row1: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#00a2ea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botColumn3Row2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  botColumn3Row2Row1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#feaec9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botColumn3Row2Row2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#a349a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
