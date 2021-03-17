import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.containerTopRow1}>
            <Text>1</Text>
          </View>
          <View style={styles.containerTopRow2}>
            <Text>2</Text>
          </View>
        </View>
        {/* center  */}
        <View style={styles.containerCenter}>
          <View style={styles.containerCenterRow1}>
            <View style={styles.containerCenterRow1Column1}>
              <Text>3</Text>
            </View>
            <View style={styles.containerCenterRow1Column2}>
              <Text>4</Text>
            </View>
          </View>
          <View style={styles.containerCenterRow2}>
            <Text>5</Text>
          </View>
        </View>
        {/* bot   */}
        <View style={styles.containerBot}>
          <View style={styles.containerBotRow1}>
            <Text>6</Text>
          </View>
          <View style={styles.containerBotRow2}>
            <Text>7</Text>
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
    borderColor: 'black',
    borderTopWidth: 5,
  },
  // top
  containerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ed1b24',
  },
  containerTopRow1: {
    flex: 1,
    backgroundColor: '#ed1b24',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  containerTopRow2: {
    flex: 2,
    backgroundColor: '#fef102',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },

  // center
  containerCenter: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'black',
  },
  containerCenterRow1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderColor: 'black',
  },
  containerCenterRow1Column1: {
    flex: 1,
    backgroundColor: '#25b14e',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  containerCenterRow1Column2: {
    flex: 1,
    backgroundColor: '#a349a3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  containerCenterRow2: {
    flex: 1,
    backgroundColor: '#ed1b24',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  //bot
  containerBot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  containerBotRow1: {
    flex: 1,
    backgroundColor: '#ff7f26',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  containerBotRow2: {
    flex: 1,
    backgroundColor: '#3f47cc',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
});
