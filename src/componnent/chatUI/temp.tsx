import { useEffect, useState } from "react"
import io from 'socket.io-client'; // Add this


const TempChat = () => {
    const [userName, setUserName] = useState('');
    const [RoomName, setRoomName] = useState('');
    const [massege, setMassege] = useState('');
    const [messagesRecieved, setMessagesReceived] = useState([{}]);

    const socket = io('http://localhost:8787/'); // Add this -- our server will run on port 4000, so we connect to it from here

    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log(data);
            setMessagesReceived(() => [
                ...messagesRecieved,
                {
                    message: data.message,
                    username: data.username,
                    __createdtime__: data.__createdtime__,
                },
            ]);
        });

        // Remove event listener on component unmount
        return () => {
            socket.off('receive_message');
        };
    }, [socket])

    useEffect(()=>{
        console.log("messagesRecieved",messagesRecieved);
        
    },[messagesRecieved])

    const joinRoom = () => {
        if (RoomName !== '' && userName !== '') {
            socket.emit('join_room', { userName, RoomName });
        }
    };

    const sendMassege = () => {
        if (massege !== '') {
            socket.emit('join_room', { userName, RoomName });
        }
    };

    return (
        <>
            <input
                placeholder='User name...'
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                placeholder='Room name...'
                onChange={(e) => setRoomName(e.target.value)}
            />
            <button
                onClick={joinRoom}
            >Join Room</button>
            <div>
                <input  placeholder='Massege...'
                onChange={(e) => setMassege(e.target.value)}/>
                <button onClick={sendMassege}>send</button>
            </div>
        </>
    )
}
export default TempChat