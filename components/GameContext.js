import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState('X');
    const [winner, setWinner] = useState(null);

    const value = {
        board,
        setBoard,
        playerTurn,
        setPlayerTurn,
        winner,
        setWinner,
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};