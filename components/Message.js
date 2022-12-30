import { useMoralis } from "react-moralis"
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

function Message({message}) {
    const {user}= useMoralis();

    const isUserMessage= message.get("ethAddress")==user.get("ethAddress");

    return (
        <div className={`flex items-end space-x-1 relative ${
            isUserMessage && "justify-end"
        }`}>
            <div className={`relative h-10 w-10 ${
                isUserMessage && 'order-last ml-2'
            }`}>
                <Avatar username={message.get("username")} />
            </div>  
            <div className={`flex space-x-4 p-3 rounded-lg ${
                isUserMessage?'rounded-br-none bg-gray-200':
                'rounded-bl-none bg-blue-200'}`}>
                <p>{message.get("message")}</p>
            </div>

            {/* Time Stamp and username */}
            <TimeAgo
            className={`text-[15px] italic text-gray-400
            ${isUserMessage && "order-first pr-1"}`}
            datetime={message.createdAt} />
            <p className={`absolute -bottom-5 text-xs ${isUserMessage?"text-gray-200"
            : "text-blue-200"
            }`}>{message.get("username")}
            </p>
        </div>
    );
}

export default Message
