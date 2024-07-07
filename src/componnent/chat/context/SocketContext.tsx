import React, { createContext, ReactNode } from 'react';
import io, { Socket } from 'socket.io-client';
import { HTTP } from '../../../HTTPpage.contents';

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
    const socket = io('http://localhost:8787/', { transports: ['websocket', 'polling'] });
    // const socket = io('http://localhost:8787/massage', { transports: ['websocket', 'polling'] });


    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketContext, SocketProvider };