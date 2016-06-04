/* global Todos */
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  START_TODO,
  COMPLETE_TODO,
} from 'dir_src/constants';
import { createReducer } from 'dir_src/utils';

const initialState = {};

export default createReducer(initialState, {
  [ADD_TODO]: (state, action) => {
    Todos.insert({
      started: false,
      completed: false,
      text: action.text,
    });
    return state;
  },
  [DELETE_TODO]: (state, action) => {
    Todos.remove(action.id);
    return state;
  },
  [EDIT_TODO]: (state, action) => {
    Todos.update(action.id, {$set: {text: action.text}});
    return state;
  },
  [START_TODO]: (state, action) => {
    Todos.update(action.id, {$set: {started: true, completed: false}});
    return state;
  },
  [COMPLETE_TODO]: (state, action) => {
    Todos.update(action.id, {$set: {started: false, completed: true}});
    return state;
  },
});
