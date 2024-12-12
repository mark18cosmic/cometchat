import Image from "next/image";
import Navbar from "./components/Navbar";
import MessageComposer from "./components/MessageComposer";
import MessageBubble from "./components/MessageBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-[1800px]">
        <MessageBubble />
      </div>
      <MessageComposer />
    </>
  );
}
