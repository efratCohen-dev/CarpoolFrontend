import React, { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
import { SocketContext } from '../context/SocketContext';
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";
import { UsersContext } from '../context/UsersContext';

const Login: React.FC = () => {
    const socket = useContext(SocketContext);
    const { name, setName, room, setRoom } = useContext(MainContext);
    const history = [];
    const toast = useToast();
    const { setUsers } = useContext(UsersContext);

    useEffect(() => {
        const handleUsersUpdate = (users: any[]) => {
            setUsers(users);
        };

        socket.on("users", handleUsersUpdate);

        return () => {
            socket.off("users", handleUsersUpdate);
        };
    }, [socket, setUsers]);

    const handleClick = () => {
        socket.emit('login', { name, room }, (error: string | null) => {
            if (error) {
                console.error(error); 
                toast({
                    position: "top",
                    title: "Error",
                    description: error,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                history.push('/chat');
                toast({
                    position: "top",
                    title: "Hey there",
                    description: `Welcome to ${room}`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }
        });
    };

    return (
        <Flex className='login' flexDirection='column' mb='8'>
            <Heading as="h1" size="4xl" textAlign='center' mb='8' fontFamily='DM Sans' fontWeight='600' letterSpacing='-2px'>Chattr.io</Heading>
            <Flex className="form" gap='1rem' flexDirection={{ base: "column", md: "row" }}>
                <Input variant='filled' mr={{ base: "0", md: "4" }} mb={{ base: "4", md: "0" }} type="text" placeholder='User Name' value={name} onChange={(e) => setName(e.target.value)} />
                <Input variant='filled' mr={{ base: "0", md: "4" }} mb={{ base: "4", md: "0" }} type="text" placeholder='Room Name' value={room} onChange={(e) => setRoom(e.target.value)} />
                <IconButton colorScheme='blue' isRound icon={<RiArrowRightLine />} onClick={handleClick} aria-label="Login" />
            </Flex>
        </Flex>
    );
};

export default Login;