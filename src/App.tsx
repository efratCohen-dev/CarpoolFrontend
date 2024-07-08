import Search from '../src/componnent/search/Search';
import Join from './componnent/login/join';
import DriversUI from './componnent/drivers/DriversUI';
import React from 'react';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ChakraProvider, Flex, Switch } from "@chakra-ui/react";
import { SocketProvider } from './componnent/chat/context/SocketContext';
import { MainProvider } from './componnent/chat/context/MainContext';
import { UsersProvider } from './componnent/chat/context/UsersContext';
import Chat from './componnent/chat/chatUI/Chat';
import Login from './componnent/chat/chatLogin/ChatLogin';
import ChatUI from './componnent/storybook/chatUI';

function App() {

  return (
    <div>
      {/* <DriversUI/> */}
      {/* <Search/> */}
      {/* <Join handleClose={handleClose}/> */}
      {/* <Join/> */}

      <ChakraProvider>
        <MainProvider>
          <UsersProvider>
            <SocketProvider>
              <Flex className="App" align='center' justifyContent='center'>
                <BrowserRouter>

                  {/* <Switch> */}
                    <Routes>
                      <Route path='/' element={<Login />} />
                      {/* <Route path='/chat' element={<Chat />} /> */}

                    </Routes>
                    {/* <Chat name={'r0556721183@gmail.com'} room={'6644bc35072c9bce7ac7500e'}/> */}
                  {/* </Switch> */}
                </BrowserRouter>

              </Flex>
            </SocketProvider>
          </UsersProvider>
        </MainProvider>
      </ChakraProvider>
    </div>
  );
}
export default App