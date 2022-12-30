import { useRef } from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
import SendMessage from "./SendMessage";
import Message from "./Message"

function Messages() {

    const {user}=useMoralis();
    const endOfMessageRef=useRef(null);
    const {data, loading, error}=useMoralisQuery(
        'Messages',
        (query)=> query.ascending('createdAt'),
        [],
        {
            live:true,
        }
    );

    // console.log(data);

    return (
        <div className="pb-56">
        {/* <div className="pb-56"> */}
            {/* <div className="my-5">
                <ByMoralis
                variant='dark'
                style={{marginLeft:"auto", marginRight:"auto"}} />
            </div> */}
            <div className="space-y-5 p-2 ">
                {data.map(message=>(
                    <Message key={message.id} message={message}/>
                ))}
            </div>
            <div className="flex justify-center">
                <SendMessage endOfMessageRef={endOfMessageRef} />
            </div>
            <div ref={endOfMessageRef} className="text-center text-gray-200 mt-5">
                <p>You're upto date little {user.getUsername()}🥳</p>
            </div>
        </div>
    )
}

export default Messages
