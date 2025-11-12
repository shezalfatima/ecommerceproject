import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { MessageSquare, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

const ChatbotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              {isChatOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
              <span className="sr-only">{isChatOpen ? 'Close Chat' : 'Open Chat'}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isChatOpen ? 'Close chat' : 'Chat with us!'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default ChatbotButton;
