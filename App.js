import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://monitoratec.com.br/blog/wp-content/uploads/2018/02/4-tendencias-para-otimizar-o-desempenho-de-sistemas-de-ti.jpeg' }} style={styles.logo} />
      <Text style={styles.instructions}>
        O estudo amplia as possibilidades e o conhecimento te dá asas para voar mais alto!
      </Text>
      <TouchableOpacity
        onPress={() => alert('Trabalho entregue!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 30, color: 'white' }}>CLICK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 315,
    height: 159,
    marginBottom: 30,
  },
  instructions: {
    color: '#888',
    fontSize: 20,
    marginHorizontal: 25,
    marginBottom: 15,
  },
});