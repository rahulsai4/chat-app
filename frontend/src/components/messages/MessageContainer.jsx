import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="flex flex-col px-4 py-2 mb-2 w-full flex-2">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>{" "}
                        <span className="text-gray-900 font-bold">
                            {selectedConversation.fullName}
                        </span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <p>Welcome, {authUser.fullName} </p>
            <p>Select a chat to start messaging</p>
        </div>
    );
};
