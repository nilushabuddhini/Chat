import { useState } from "react"

function ChatForm() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    async function Send(e) {
        e.preventDefault()

        const chat = {name, message}

        const res = await fetch('/api/chat',{
            method : "POST",
            body : JSON.stringify(chat),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const json = await res.json()
        if(!res.ok){
            setError(json.error)
        }
        if(res.ok){
            setName('')
            setMessage('')
            setError('')
            

        }
        window.location.reload()
        
    }
    return(
        <form className="add-chat" onSubmit={Send}>
            <label>Enter your name      </label><br/><br/>
            <input
               type="text"
               onChange={(e) => setName(e.target.value)}
               value={name}
               className="input-name"

            />
            <br/><br/>
            <label>Enter your message     </label><br/><br/>
            <textarea
               type="text"
               onChange={(e) => setMessage(e.target.value)}
               value={message}
               className="input-message"
               rows={5}
               

            />
            <br/><br/>
            <button className="send-msg">SEND</button>
        </form>
    )
}

export default ChatForm