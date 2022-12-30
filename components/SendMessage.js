import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessageRef}) {

    const {user, Moralis}= useMoralis();
    const [message, setMessage]= useState("");

    const sendMessage=(e)=>{
        e.preventDefault();

        if(!message) return;

        const Messages= Moralis.Object.extend('Messages');
        const messages=new Messages();

        messages.save({
            message:message,
            username:user.getUsername(),
            ethAddress: user.get('ethAddress'),
        }).then(
            (message)=>{

        },
        (error)=>{
            console.log(error.message);
        });
        endOfMessageRef.current.scrollIntoView({behaviour:"smooth"});
        setMessage("");
    }

    return (
        <form className="flex fixed bottom-10 px-5 py-3 bg-black opacity-80 w-11/12
        max-w-2xl shadow-xl rounded-full
        ">
            <input className="flex-grow outline-none bg-transparent
            text-white placeholder-gray-400 pr-3"
            type="text"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            placeholder={`Enter your message here @ ${user.getUsername()}`}
            />
            <button
            className="font-bold text-blue-500"
            type="submit"
            onClick={sendMessage}
            >Send</button>
        </form>
    )
}

export default SendMessage
