import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Modal } from 'react-native-paper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Form = () => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const onPressHandler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted);
        } else {
            // ToastAndroid.show('The name must be longer than 3 characters',ToastAndroid.SHORT);

        }
    }
    return (
        <View style={styles.container}>

            <Modal>
            {/* https://github.com/mahdi-sharifimehr/RN-Tutorial-Main/blob/RN-Tutorial-14/App.js */}
            <Text style={styles.text}>The name must be longer than 3 charachters</Text>
            </Modal>

            <Text style={styles.text}>Please Write your name</Text>
            <TextInput
                multiline
                style={styles.input}
                placeholder='E.g. Pooja'
                onChangeText={(value) => setName(value)} />

            <Pressable
                onPress={onPressHandler}
                hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                android_ripple={{ color: '#00f' }}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
                    styles.button
                ]}
            >
                <Text style={styles.text}>
                    {submitted ? 'Clear' : 'Submit'}
                </Text>
            </Pressable>
            {submitted ?
                <Text style={styles.text}>
                    You are registered as {name}
                </Text>
                :
                null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 25,
        margin: 10
    },
    input: {
        width: 200,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    button: {
        width: 150,
        height: 50,
        alignItems: 'center'
    }
});

export default Form;