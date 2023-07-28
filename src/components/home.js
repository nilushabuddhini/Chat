import { useState, useEffect } from "react";
import Chatting from './chatdetails'
import Messages from './chatPage'


function Home() {
    
    const [chats, setChats] = useState([])

    useEffect(() => {
        const fetchchat = async () => {
            const res = await fetch('/api/chat')
            const json = await res.json()
    
            if (res.ok){
                setChats(json)
            }
        }
        fetchchat()
    },[])


    return(
        <div className="welcome">


             <div className="chatpg" id="chatpg">
                <h1 id="Chat-With-World">Chat With Earth</h1>
                <br/><br/>

                <Chatting/> 

                {chats && chats.map((chatter) => (
                <Messages key={chatter._id} chatter={chatter}/>
                ))}
          
              </div>
          </div>
    );
}


export default Home