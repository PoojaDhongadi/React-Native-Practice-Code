import { CurrentRenderContext } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View , Text, StyleSheet, Animated} from 'react-native';

const Animations = () => {

    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progress,
            {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true
            }).start();
    },[progress]);

    return(
        <View style={styles.container}>
            <Animated.Text style={[styles.text,{opacity: progress}]}>Fading In</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        backgroundColor: 'red',
        padding: 10
    }
});

export default Animations;