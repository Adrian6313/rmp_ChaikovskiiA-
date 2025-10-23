import React, { useState } from 'react';
import { View, Text, Button, Alert, Platform, StyleSheet } from 'react-native';

// Универсальный MessageBox
const showMessage = (title: string, message: string | undefined) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n${message}`);
  } else {
    Alert.alert(title, message);
  }
};

const Cat = ({ name }: { name: string }) => {
  const [isHungry, setIsHungry] = useState(true);

  const feedCat = () => {
    setIsHungry(false);
    showMessage('Мяу!', `Спасибо, я сыт! ❤️\n— ${name}`);
  };

  return (
    <View style={styles.catContainer}>
      <Text style={styles.catText}>
        Я {name}, и я сейчас {isHungry ? 'голоден' : 'сыт'}!
      </Text>
      <Button
        title={isHungry ? 'Покорми меня, пожалуйста!' : 'Спасибо!'}
        onPress={feedCat}
        disabled={!isHungry}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={styles.cafeContainer}>
      <Cat name="Барбарис" />
      <Cat name="Руфус" />
      <Cat name="Рэй" />
    </View>
  );
};

export default Cafe;

const styles = StyleSheet.create({
  cafeContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fffaf0',
    flex: 1,
  },
  catContainer: {
    marginBottom: 30,
    width: '80%',
  },
  catText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});
