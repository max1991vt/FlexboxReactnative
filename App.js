import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <View style={styles.column1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.topColumn2}>
            <View style={styles.topRow3}>
              <Text>3</Text>
            </View>
            <View style={styles.topRow4}>
              <Text>4</Text>
            </View>
          </View>
        </View>
        {/* bot   */}
        <View style={styles.bot}>
          {/* cl1  */}
          <View style={styles.column1}>
            <Text style={styles.text}>2</Text>
          </View>
          {/* cl2  */}
          <View style={styles.botColumn2}>
            <View style={styles.topRow5}>
              <Text>5</Text>
            </View>
            <View style={styles.topRow6}>
              <Text>6</Text>
            </View>
          </View>
          {/* cl3  */}
          <View style={styles.botColumn3}>
            <View style={styles.topRow7}>
              <Text>7</Text>
            </View>
            <View style={styles.topRow8}>
              <Text>8</Text>
            </View>
            <View style={styles.topRow9}>
              <Text>9</Text>
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
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  column1: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21d128',
  },
  topColumn2: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'red',
  },
  topRow3: {
    flex: 0.5,
    backgroundColor: '#fe2200',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow4: {
    flex: 0.5,
    backgroundColor: '#d78e87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //bot
  bot: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  topRow5: {
    flex: 0.5,
    backgroundColor: '#338ab7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow6: {
    flex: 0.5,
    backgroundColor: '#6b2966',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow7: {
    flex: 0.5,
    backgroundColor: '#6f1741',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow8: {
    flex: 0.5,
    backgroundColor: '#b57626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow9: {
    flex: 0.5,
    backgroundColor: '#9a9098',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botColumn3: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'red',
  },
  botColumn2: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'red',
  },
});
