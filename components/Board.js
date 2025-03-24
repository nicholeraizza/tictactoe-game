import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';

const Board = () => {
    return (
        <View style={styles.board}>
            <View style={styles.row}>
                <Square index={0} />
                <Square index={1} />
                <Square index={2} />
            </View>
            <View style={styles.row}>
                <Square index={3} />
                <Square index={4} />
                <Square index={5} />
            </View>
            <View style={styles.row}>
                <Square index={6} />
                <Square index={7} />
                <Square index={8} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
});

export default Board;