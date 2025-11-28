import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const isAdmin = false;

const estilos = 'upv';

const modulos2Dam = [
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
  { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
  { nombre: 'PSP', profesor: 'Fran', horas: 60 },
  { nombre: 'SGE', profesor: 'Belén', horas: 100 },
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
  { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
];

const saludar = nombre => {
  return <Text>{nombre}</Text>;
};

const datos = textLabel => {
  return (
    <View style={estilos === 'florida' ? styles.florida : styles.upv}>
      <TextInput
        label={textLabel}
        placeholder="Nombre"
        placeholderTextColor={estilos === 'florida' ? 'green' : 'orange'}
        left={<TextInput.Icon icon="eye" />}
      ></TextInput>
      <TextInput
        label={textLabel}
        placeholder="Modulo"
        placeholderTextColor={estilos === 'florida' ? 'green' : 'orange'}
        left={<TextInput.Icon icon="eye" />}
      ></TextInput>
    </View>
  );
};

const botonInformes = () => {
  return (
    <Button
      icon="format-list-bulleted"
      mode="contained"
      style={{ borderRadius: 5 }}
    >
      INFORMES
    </Button>
  );
};

class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        {saludar('Patricio')}
        {datos('Introduce datos')}
        {isAdmin && botonInformes()}
        <ScrollView>
          {modulos2Dam.map((item, pos) => {
            return (
              <View 
              style={pos % 2 === 0 ? styles.pares : styles.impares}
              key={pos}>
                <Text>{pos + 1}</Text>
                <Text>{item.nombre}</Text>
                <Text>{item.profesor}</Text>
                <Text>{item.horas}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
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

  pares: {
    backgroundColor: '#F48FB1'
  },

  impares: {
backgroundColor: '#F8BBD0'
  },
});
export default App;
