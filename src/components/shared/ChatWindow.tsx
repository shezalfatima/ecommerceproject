import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send } from "lucide-react";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  return (
    <Card className="fixed bottom-24 right-6 w-80 h-[450px] shadow-2xl rounded-lg flex flex-col z-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Chat with ModeMuse</h3>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
          <X className="h-5 w-5" />
          <span className="sr-only">Close chat</span>
        </Button>
      </CardHeader>
      <CardContent className="flex-grow p-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2.5">
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-3 border-gray-200 bg-secondary rounded-e-xl rounded-es-xl">
                <p className="text-sm font-normal text-secondary-foreground">Hello! How can I help you with your order or any other questions?</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 border-t">
        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="Type a message..." className="flex-1" />
          <Button type="submit" size="icon">
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
