import React from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider, Flex, Switch } from "@chakra-ui/react";
import { SocketProvider } from './componnent/chat/context/SocketContext';
import { MainProvider } from './componnent/chat/context/MainContext';
import { UsersProvider } from './componnent/chat/context/UsersContext';
import Chat from './componnent/chat/chatUI/Chat';
import Login from './componnent/chat/chatLogin/ChatLogin';
import ChatUI from './componnent/storybook/chatUI';

function App(): JSX.Element {
  return (
    // <ChatUI/>

      <ChakraProvider>
        <MainProvider>
          <UsersProvider>
            <SocketProvider>
              <Flex className="App" align='center' justifyContent='center'>
              {/* <BrowserRouter> */}
                <Router>
                  {/* <Switch> */}
                    {/* <Route path='/' element={<Login name={'r0556721183@gmail.com'} room={'6644bc35072c9bce7ac7500e'}/>} /> */}
                    {/* <Route path='/chat' element={<Chat name={'r0556721183@gmail.com'} room={'6644bc35072c9bce7ac7500e'}/>} /> */}
                    <Chat name={'r0556721183@gmail.com'} room={'6644bc35072c9bce7ac7500e'}/>
                  {/* </Switch> */}
                </Router>
              {/* </BrowserRouter> */}

            </Flex>
          </SocketProvider>
        </UsersProvider>
      </MainProvider>
    </ChakraProvider>
  );
}

export default App;