import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const saluda = () => {
return <Text style = {styles.textWhere}>Patricio Mora</Text>
};


class App extends Component {
render() {
return (
<View style = {styles.container}>  
{saluda()}
</View>


);
}
}
const styles = StyleSheet.create({


 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


textWhere:{
    fontSize: 24,
},
});
export default App;