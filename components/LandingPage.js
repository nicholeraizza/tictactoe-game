import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TicTacToe</Text>

            <TouchableOpacity
                style={styles.button} // Use a common button style
                onPress={() => navigation.navigate('Game')}
            >
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button} // Use a common button style
                onPress={() => navigation.navigate('HowTo')}
            >
                <Text style={styles.buttonText}>How To Play?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    button: { // Common button style
        backgroundColor: '#6A5ACD',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginBottom: 20,
        minWidth: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LandingPage;