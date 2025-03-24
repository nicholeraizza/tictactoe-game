import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GameContext } from './GameContext';

const Square = ({ index }) => {
    const { board, setBoard, playerTurn, winner, setPlayerTurn } = useContext(GameContext);

    const handlePress = () => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = playerTurn;
        setBoard(newBoard);
        setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    };

    return (
        <TouchableOpacity
            style={styles.square}
            onPress={handlePress}
            disabled={!!(board[index] || winner)}
        >
            <Text style={styles.squareText}>{board[index]}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    square: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    squareText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default Square;