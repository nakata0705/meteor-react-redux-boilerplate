import React from 'react';
import TodoItem from 'dir_src/components/TodoItem';
import {Tabs, Tab} from 'material-ui/Tabs';

// import {List} from 'material-ui/List';

export default class TodoApp extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    startedTodos: React.PropTypes.array.isRequired,
    completedTodos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired,
  }

  constructor() {
    super();
  }

  render() {
    const { todos, startedTodos, completedTodos, actions } = this.props;
    const style = { overflow: 'scroll', height: '80vh' };
    return (
      <Tabs>
        <Tab label="ToDo" >
          <div className='TodoApp' style={style}>
            {todos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </div>
        </Tab>
        <Tab label="Doing" >
          <div className='TodoApp' style={style}>
            {startedTodos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </div>
        </Tab>
        <Tab label="Done">
          <div className='TodoApp'style={style}>
            {completedTodos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </div>
        </Tab>
      </Tabs>
    );
  }
}
