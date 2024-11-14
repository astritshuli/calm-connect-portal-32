import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Image, Paperclip, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isNurse: boolean;
  timestamp: Date;
}

const Messaging = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", isNurse: true, timestamp: new Date() },
    { id: 2, text: "I have a question about the upcoming appointment", isNurse: false, timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          isNurse: false,
          timestamp: new Date(),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl h-screen flex flex-col">
      <Card className="flex-1 bg-medical-50 p-4 mb-4">
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isNurse ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.isNurse
                      ? "bg-white text-gray-800"
                      : "bg-medical-300 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Image className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage}>
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Messaging;