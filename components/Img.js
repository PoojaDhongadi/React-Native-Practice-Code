import React, { useState }  from 'react';
import {
  View, ToastAndroid, View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const Img = () => {
  const [name, setName] = useState("Pooja");
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  const showToast = () => {
    setName("changed pooja");
    ToastAndroid.show("U clicked me", ToastAndroid.SHORT);
  };
  const incrementBy5 = () => {
    setNum(num + 5);
    setCount(count + 1);
  };

  const onPressButton = () => {
    alert('you clicked me');
  };
  return (
    <View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>Hello Pooja</Text>
      <Button title='Click me' style={styles.btn}
        onPress={showToast}>
      </Button>

      <Text style={styles.text}>{num}</Text>
      <Button title='ADD' onPress={incrementBy5}></Button>
      <Text style={styles.text}>You clicked {count} times</Text>

      <Image
        style={styles.image}
        source={require('./assests/done.png')}
        resizeMode='stretch'
      />
      <Button
        title='Alert button'
        onPress={() => {
          alert('u clicked me');
        }}
      ></Button>
      <Image
        source={require('../assests/done.png')}
      />
      <TouchableHighlight
        onPress={onPressButton}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.text}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.text}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={onPressButton}
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style={styles.button}>
          <Text style={styles.text}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback
        onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.text}>TouchableOpacity</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableHighlight
        onLongPress={onPressButton}
        underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.text}>Long Press Me!</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
});

export default Img;
