// import React, { useContext, useEffect, useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import { MainContext, MainProvider } from '../context/MainContext';
// import { SocketContext, SocketProvider } from '../context/SocketContext';
// import { FiList } from 'react-icons/fi';
// import { Box, Flex, Heading, IconButton, Text, Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// import { BiMessageDetail } from 'react-icons/bi';
// import { RiSendPlaneFill } from 'react-icons/ri';
// import ScrollToBottom from 'react-scroll-to-bottom';
// import { useToast } from "@chakra-ui/react";
// import './ChatStyle.scss';
// import { UsersContext, UsersProvider } from '../context/UsersContext';
// import { HTTP } from '../../../HTTPpage.contents';
// import useGet from '../../../hooks/Get';
// import GeneralCreate from '../../../hooks/GeneralCreate';

// interface Props {
//     name: String;
//     room: string;
// }

// const Chat: React.FC<Props> = ({ name, room }) => {
//     // MainContext
//     // const { name, room, setName, setRoom } = useContext(MainContext);
//     const socket = useContext(SocketContext);
//     const [message, setMessage] = useState('');
//     const { res, axiosData } = useGet(HTTP.MASSAGEEURL);
//     const { generalCreate } = GeneralCreate();

//     const [messages, setMessages] = useState<any[]>([]);
//     const history = { push: String, go: Number };
//     const { users } = useContext(UsersContext);

//     const toast = useToast();

//     useEffect(() => {        
//         axiosData();
//     }, [])
//     useEffect(() => {
//         setMessages(res);
//     }, [res]);

//     useEffect(() => {
//         console.log("socket", socket);
//     }, [socket])
//     window.onpopstate = e => logout();

//     useEffect(() => {
//         if (!name) history.push('/');
//     }, [history, name]);
//     useEffect(() => {
//         // socket.emit('message', message, () => setMessage(''));
//         // setMessage('');
//         socket.on("sendMessage", (msg: any) => {
//             setMessages(messages => [...messages, msg]);
//         });
//         socket.on("notification", (notif: any) => {
//             toast({
//                 position: "top",
//                 title: notif?.title,
//                 description: notif?.description,
//                 status: "success",
//                 duration: 5000,
//                 isClosable: true,
//             });
//         });
//         return () => {
//             socket.off('sendMessage');
//         };
//     }, [toast, socket, messages]);

//     useEffect(() => {
//         console.log("messages", messages);
//         // return () => {
//         //     socket.off('sendMessage');
//         // };
//     }, [messages]);

//     const handleSendMessage = () => {
//         if (message !== '') {
//             // socket.emit('new', name, room, () =>
//             //     console.log('client new')
//             // )

//             socket.emit('sendMessage', message, () => {
//                 setMessage('')
//             }
//             );
//             generalCreate('צאט', message)

//             setMessage('');
//         }

//         // socket.emit('new', name, room, () => {
//         //     console.log("client new room", room);
//         // });


//     };

//     const logout = () => {
//         // setName(''); 
//         // setRoom('');
//         history.push('/');
//         history.go(0);
//     };


//     return (
//         <MainProvider>
//             <UsersProvider>
//                 <SocketProvider>
//                     {/* <Flex className="App" align='center' justifyContent='center'></Flex> */}
//                     <Flex className='room' flexDirection='column' width={{ base: "100%", sm: '575px' }} height={{ base: "100%", sm: "auto" }}>
//                         <Heading className='heading' as='h4' bg='white' p='1rem 1.5rem' borderRadius='10px 10px 0 0'>
//                             <Flex alignItems='center' justifyContent='space-between'>
//                                 <Menu >
//                                     <MenuButton as={IconButton} icon={<FiList />} isRound bg='blue.300' color='white' />
//                                     <MenuList>
//                                         {users && users.map(user => (
//                                             <MenuItem minH='40px' key={user.id}>
//                                                 <Text fontSize='sm'>{user.name}</Text>
//                                             </MenuItem>
//                                         ))}
//                                     </MenuList>
//                                 </Menu>
//                                 <Flex alignItems='center' flexDirection='column' flex={{ base: "1", sm: "auto" }}>
//                                     <Heading fontSize='lg'>{room.slice(0, 1).toUpperCase() + room.slice(1)}</Heading>
//                                     <Flex alignItems='center'><Text mr='1' fontWeight='400' fontSize='md' opacity='.7' letterSpacing='0'>{name}</Text><Box h={2} w={2} borderRadius='100px' bg='green.300'></Box></Flex>
//                                 </Flex>
//                                 <Button color='gray.500' fontSize='sm' onClick={logout}>Logout</Button>
//                             </Flex>
//                         </Heading>

//                         <ScrollToBottom className='messages' debug={false}>
//                             {messages.length > 0 ?
//                                 messages.map((msg, i) => (
//                                     <Box key={i} className={`message ${msg.user === name ? "my-message" : ""}`} m=".2rem 0">
//                                         <Text fontSize='xs' opacity='.7' ml='5px' className='user'>{msg.user}</Text>
//                                         <Text fontSize='sm' className='msg' p=".4rem .8rem" bg='white' borderRadius='15px' color='white'>{msg.text}</Text>
//                                     </Box>
//                                 )) :
//                                 <Flex alignItems='center' justifyContent='center' mt='.5rem' bg='#EAEAEA' opacity='.2' w='100%'>
//                                     <Box mr='2'>-----</Box>
//                                     <BiMessageDetail fontSize='1rem' />
//                                     <Text ml='1' fontWeight='400'>No messages</Text>
//                                     <Box ml='2'>-----</Box>
//                                 </Flex>
//                             }
//                         </ScrollToBottom>

//                         <div className='form'>
//                             <input type="text" placeholder='Enter Message' value={message} onChange={e => setMessage(e.target.value)} />
//                             <IconButton colorScheme='green' isRound icon={<RiSendPlaneFill />} onClick={handleSendMessage} disabled={message === ''} aria-label={''}>Send</IconButton>
//                         </div>
//                     </Flex>
//                 </SocketProvider>
//             </UsersProvider>
//         </MainProvider>
//     );
// };

// export default Chat;
import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, IconButton, Text, Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FiList } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useToast } from "@chakra-ui/react";
import './ChatStyle.scss';
import { UsersContext } from '../context/UsersContext';
import { HTTP } from '../../../HTTPpage.contents';
import useGetById from '../../../hooks/GetById';  
import GeneralCreate from '../../../hooks/GeneralCreate';
import { SocketContext } from '../context/SocketContext';  
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../../Store';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Props {
    name: String;
    room: String;
}

const Chat: React.FC<Props> = ({ name, room }) => {
    const { resGetById, axiosDataGetById } = useGetById(HTTP.MASSAGEEURL);
    const { generalCreate } = GeneralCreate();
    const { users } = useContext(UsersContext);
    const socket = useContext(SocketContext); 
    const toast = useToast();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        axiosDataGetById(room);
    }, []);

    useEffect(() => {
        setMessages(resGetById);
    }, [resGetById]);

    useEffect(() => {
        if (socket && typeof socket.on === 'function') {
            socket.on("sendMessage", (msg: any) => {
                setMessages((prevMessages) => [...prevMessages, msg]);
            });
            socket.on("notification", (notif: any) => {
                toast({
                    position: "top",
                    title: notif?.title,
                    description: notif?.description,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            });

            return () => {
                socket.off('sendMessage');
            };
        } else {
            console.error("Socket or socket.on is not available.");
        }
    }, [socket, toast]);

    const passenger =  useAppSelector((state) => state.PassengerSlice.passenger);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('sendMessage', passenger,room,message, () => {
                setMessage('');
            });
            // generalCreate('צאט', message); 
            setMessage('');
        }
    };

  

    return (
        <Flex className='room' flexDirection='column' width={{ base: "100%", sm: '575px' }} height={{ base: "100%", sm: "auto" }}>
            <Heading className='heading' as='h4' bg='white' p='1rem 1.5rem' borderRadius='10px 10px 0 0'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Menu >
                        <MenuButton as={IconButton} icon={<FiList />} isRound bg='blue.300' color='white' />
                        <MenuList>
                            {users && users.map(user => (
                                <MenuItem minH='40px' key={user.id}>
                                    <Text fontSize='sm'>{user.name}</Text>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    <Flex alignItems='center' flexDirection='column' flex={{ base: "1", sm: "auto" }}>
                        <Heading fontSize='lg'>{room.slice(0, 1).toUpperCase() + room.slice(1)}</Heading>
                        <Flex alignItems='center'><Text mr='1' fontWeight='400' fontSize='md' opacity='.7' letterSpacing='0'>{name}</Text><Box h={2} w={2} borderRadius='100px' bg='green.300'></Box></Flex>
                    </Flex>
                </Flex>
            </Heading>

            <ScrollToBottom className='messages' debug={false}>
                {messages.length > 0 ?
                    messages.map((msg, i) => (
                        <Box key={i} className={`message ${msg.user === name ? "my-message" : ""}`} m=".2rem 0">
                            <Text fontSize='xs' opacity='.7' ml='5px' className='user'>{msg.user}</Text>
                            <Text fontSize='sm' className='msg' p=".4rem .8rem" bg='white' borderRadius='15px' color='white'>{msg.text}</Text>
                        </Box>
                    )) :
                    <Flex alignItems='center' justifyContent='center' mt='.5rem' bg='#EAEAEA' opacity='.2' w='100%'>
                        <Box mr='2'>-----</Box>
                        <BiMessageDetail fontSize='1rem' />
                        <Text ml='1' fontWeight='400'>No messages</Text>
                        <Box ml='2'>-----</Box>
                    </Flex>
                }
            </ScrollToBottom>

            <div className='form'>
                <input type="text" placeholder='Enter Message' value={message} onChange={e => setMessage(e.target.value)} />
                <IconButton colorScheme='green' isRound icon={<RiSendPlaneFill />} onClick={handleSendMessage} disabled={message === ''} aria-label={''}>Send</IconButton>
            </div>
        </Flex>
    );
};

export default Chat;
