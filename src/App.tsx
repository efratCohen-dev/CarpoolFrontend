import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { SocketProvider } from './componnent/chat/context/SocketContext';
import { MainProvider } from './componnent/chat/context/MainContext';
import { UsersProvider } from './componnent/chat/context/UsersContext';
import Chat from './componnent/chat/chatUI/Chat';
import Login from './componnent/chat/chatLogin/ChatLogin';
import ChatUI from './componnent/storybook/chatUI';

function App(): JSX.Element {
  return (
    <ChatUI/>
    // <ChakraProvider>
    //   <MainProvider>
    //     <UsersProvider>
    //       <SocketProvider>
    //         <Flex className="App" align='center' justifyContent='center'>
    //           <Router>
    //             {/* <Switch> */}
    //               {/* <Route  path='/' component={Login} />
    //               <Route path='/chat' component={Chat} /> */}
    //               <Chat/>
    //             {/* </Switch> */}
    //           </Router>
    //         </Flex>
    //       </SocketProvider>
    //     </UsersProvider>
    //   </MainProvider>
    // </ChakraProvider>
  );
}

export default App;