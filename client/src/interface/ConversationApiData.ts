import { Conversation } from './User';

export interface ConversationsApiDataSuccess {
  message: string;
  conversations: Conversation[];
  token: string;
}

export interface ConversationsApiData {
  error?: { message: string };
  success?: ConversationsApiDataSuccess;
}
export interface messageApiDataSuccess {
  message: string;
  conversation: Conversation;
  token: string;
}
export interface sendMessageApiData {
  error?: { message: string };
  success?: messageApiDataSuccess;
}
