import { useState, useContext, createContext, FunctionComponent, useEffect, useCallback } from 'react';
import { ConversationsApiData } from '../interface/ConversationApiData';
import { Conversation } from '../interface/User';
import getConversations from '../helpers/APICalls/getConversations';

interface IConversationContext {
  currentConversation: Conversation | null | undefined;
  conversations: Conversation[] | null | undefined;
  updateConversationContext: (data: Conversation[]) => void;
  updateCurrentConversation: (data: Conversation) => void;
}

export const ConversationContext = createContext<IConversationContext>({
  currentConversation: undefined,
  conversations: [],
  updateConversationContext: () => null,
  updateCurrentConversation: () => null,
});

export const ConversationProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [conversations, setConversations] = useState<Conversation[] | null | undefined>();
  const [currentConversation, setCurrentConversation] = useState<Conversation>();
  const updateConversationContext = useCallback((data: Conversation[]) => {
    setConversations(data);
  }, []);
  const updateCurrentConversation = (data: Conversation) => {
    setCurrentConversation(data);
  };
  //get all conversations
  useEffect(() => {
    getConversations().then((data: ConversationsApiData) => {
      if (!data) return;
      if (data.success) {
        updateConversationContext(data.success.conversations);
      }
    });
  }, [updateConversationContext]);

  return (
    <ConversationContext.Provider
      value={{ currentConversation, conversations, updateConversationContext, updateCurrentConversation }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export function useConversation(): IConversationContext {
  return useContext(ConversationContext);
}
