import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  START_TODO,
  COMPLETE_TODO,
} from 'dir_src/constants';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function editTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
}

export function startTodo(id) {
  return {
    type: START_TODO,
    id,
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
  };
}
