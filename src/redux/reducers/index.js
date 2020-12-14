import { combineReducers } from "redux";
import entities from './entities/entities';
import user from './user';

export default combineReducers({user, entities});
