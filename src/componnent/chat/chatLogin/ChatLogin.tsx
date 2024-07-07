import React, { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
import { SocketContext } from '../context/SocketContext';
import { Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";
import { UsersContext } from '../context/UsersContext';
import Chat from '../chatUI/Chat';

interface Props {
    name: String;
    room: String;
}
const Login: React.FC<Props> = ({ name, room }) => {


    // const socket = useContext(SocketContext);
    // // const { name, setName, room, setRoom } = useContext(MainContext);
    // const history = [];
    // const toast = useToast();
    // const { setUsers } = useContext(UsersContext);

    // useEffect(() => {
    //     const handleUsersUpdate = (users: any[]) => {
    //         setUsers(users);
    //     };

    //     socket.on("users", handleUsersUpdate);

    //     return () => {
    //         socket.off("users", handleUsersUpdate);
    //     };
    // }, [socket, setUsers]);

    // // const handleClick = () => {
    // //     socket.emit('login', { name, room }, (error: string | null) => {
    // //         if (error) {
    // //             console.error(error);
    // //             toast({
    // //                 position: "top",
    // //                 title: "Error",
    // //                 description: error,
    // //                 status: "error",
    // //                 duration: 5000,
    // //                 isClosable: true,
    // //             });
    // //         } else {
    // //             history.push('/chat');
    // //             toast({
    // //                 position: "top",
    // //                 title: "Hey there",
    // //                 description: `Welcome to ${room}`,
    // //                 status: "success",
    // //                 duration: 5000,
    // //                 isClosable: true,
    // //             });
    // //         }
    // //     });
    // };

     return (<>
       {/* <Chat name={name} room={room} /> */}
     </>
     )

};

export default Login;