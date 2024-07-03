import React, { createContext, ReactNode } from 'react';
import io, { Socket } from 'socket.io-client';

// Define the type for context value
type SocketContextType = Socket;

// Create context with initial value as SocketContextType
const SocketContext = createContext<SocketContextType>({} as SocketContextType);

// Define props type for SocketProvider
type SocketProviderProps = {
    children: ReactNode;
};

// SocketProvider component
const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const ENDPOINT = 'https://socket-chat-ak.herokuapp.com/';
    const socket = io(ENDPOINT, { transports: ['websocket', 'polling'] });

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketContext, SocketProvider };