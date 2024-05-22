import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useListenMessages from "../../hooks/useListenMessages";

const Home = () => {
    useListenMessages();
    return (
        <div className="flex rounded-lg overflow-hidden w-full h-full">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};
export default Home;
