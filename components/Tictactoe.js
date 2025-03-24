import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Board from './Board';
import { GameContext } from './GameContext';

const Tictactoe = () => {
    const { board, setBoard, playerTurn, setPlayerTurn, winner, setWinner } = useContext(GameContext);

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const calculateWinner = (squares) => {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const isBoardFull = (squares) => {
        return squares.every((square) => square !== null);
    };

    useEffect(() => {
        const currentWinner = calculateWinner(board);

        if (currentWinner) {
            setWinner(currentWinner);
            Alert.alert('Game Over!', `${currentWinner} wins!`);
        } else if (isBoardFull(board)) {
            setWinner('draw');
            Alert.alert('Game Over!', 'It\'s a draw!');
        }
    }, [board]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setPlayerTurn('X');
        setWinner(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <Board />
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Text style={styles.resetButtonText}>Reset Game</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    resetButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Tictactoe;