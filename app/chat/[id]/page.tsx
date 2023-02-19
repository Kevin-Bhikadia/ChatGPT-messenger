import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  // console.log(props);
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-end">
      <div className="flex flex-col-reverse">
        <Chat chatId={id} />
      </div>

      {/* chst input */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
