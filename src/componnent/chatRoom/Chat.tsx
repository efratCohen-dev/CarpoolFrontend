import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { IMassage } from '../interface/IMassage';

const socket = io('http://localhost:8787/massage');


const Chat = () => {
    const [messages, setMessages] = useState({});

    useEffect(() => {
        socket.on('message1', (message: IMassage) => {
            //   setMessages([...messages, message]);
        });

        // socket.on('userList', (userList) => {
        //     //   setUsers(userList);
        //     console.log(userList);
        // });

        return () => {
            socket.off('message');
            // socket.off('userList');
        };
    }, [messages]);





    return (
        <div>

        </div>
    )
}
export default Chat