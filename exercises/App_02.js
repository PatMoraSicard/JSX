import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const saludar = nombre => {
  return <Text style={styles.textWhere}>{nombre}</Text>;
};

const datos = textLabel => {
  return (
    <View>
      <TextInput label={textLabel} placeholder="Nombre"></TextInput>
      <TextInput></TextInput>
    </View>
  );
};

class App extends Component {
  render() {
    return (
      <>
        {saludar('Patricio')}
        {datos('Introduce tus datos')}
      </>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  textWhere: {
    fontSize: 24,
  },
});
export default App;
