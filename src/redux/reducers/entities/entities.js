import { combineReducers } from 'redux'
import messages from './messages';
import conversations from './conversations';
import selectedConversation from './selectedConversation';

const todoApp = combineReducers({
  messages,
  conversations,
  selectedConversation
})

export default todoApp