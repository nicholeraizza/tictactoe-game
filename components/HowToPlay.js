import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HowToPlay = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe Rules</Text>

            <Text style={styles.rulesText}>
                In 3x3 Tic-Tac-Toe, two players take turns marking spaces on a 3x3 grid with "X" or "O", aiming to be the first to get three in a row (horizontally, vertically, or diagonally). If all squares are filled and no player has three in a row, the game ends in a tie.
            </Text>

            <View style={styles.examplesContainer}>
                <View style={styles.example}>
                    <Image source={require('../assets/win.png')} style={styles.exampleImage} />
                    <Text style={styles.exampleText}>Win!</Text>
                </View>

                <View style={styles.example}>
                    <Image source={require('../assets/draw.png')} style={styles.exampleImage} />
                    <Text style={styles.exampleText}>Draw</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.exitButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.exitButtonText}>Exit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    rulesText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'justify',
    },
    examplesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    example: {
        alignItems: 'center',
    },
    exampleImage: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    exampleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    exitButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        alignSelf: 'center',
    },
    exitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HowToPlay;