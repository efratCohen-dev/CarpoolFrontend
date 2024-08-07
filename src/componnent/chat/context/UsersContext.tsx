import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type UsersContextType = {
    users: any[]; 
    setUsers: Dispatch<SetStateAction<any[]>>; 
};


const UsersContext = createContext<UsersContextType>({
    users: [],
    setUsers: () => {},
});


type UsersProviderProps = {
    children: ReactNode;
};


const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<any[]>([]); 

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContext, UsersProvider };