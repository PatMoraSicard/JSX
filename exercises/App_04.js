import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const saludar = nombre => {
  return <Text>{nombre}</Text>;
};

const datos = textLabel => {
  return (
    <View>
      <TextInput
        label={textLabel}
        placeholder="Nombre"
        left={<TextInput.Icon icon="eye" />}
      ></TextInput>
      <TextInput
        label={textLabel}
        placeholder="Modulo"
        left={<TextInput.Icon icon="eye" />}
      ></TextInput>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <>
        {saludar('Patricio')}
        {datos('Introduce datos')}
      </>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },

  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  
});
export default App;
