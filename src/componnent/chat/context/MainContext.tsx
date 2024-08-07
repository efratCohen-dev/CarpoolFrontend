import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the type for context value
type MainContextType = {
    name: string;
    room: string;
    setName: Dispatch<SetStateAction<string>>;
    setRoom: Dispatch<SetStateAction<string>>;
};

// Create context with initial value as MainContextType
const MainContext = createContext<MainContextType>({
    name: '',
    room: '',
    setName: () => {},
    setRoom: () => {},
});

// Define props type for MainProvider
type MainProviderProps = {
    children: ReactNode;
};

// MainProvider component
const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
    const [name, setName] = useState<string>('');
    const [room, setRoom] = useState<string>('');

    return (
        <MainContext.Provider value={{ name, room, setName, setRoom }}>
            {children}
        </MainContext.Provider>
    );
};

export { MainContext, MainProvider };