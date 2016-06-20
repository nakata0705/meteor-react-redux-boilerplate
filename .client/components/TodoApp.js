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

  componentDidMount() {
    global.gantt.init('gantt_here');
    global.demoTasks = {
      data:[
        {id: 1, text: 'Project #1', start_date: '01-04-2013', duration: 11, progress: 0.6, open: true},
        {id: 2, text: 'Task #1', start_date: '03-04-2013', duration:5, progress: 1, open: true, parent:1},
        {id: 3, text: 'Task #2', start_date: '02-04-2013', duration:7, progress: 0.5, open: true, parent:1},
        {id: 4, text: 'Task #2.1', start_date: '03-04-2013', duration:2, progress: 1, open: true, parent:3},
        {id: 5, text: 'Task #2.2', start_date: '04-04-2013', duration:3, progress: 0.8, open: true, parent:3},
        {id: 6, text: 'Task #2.3', start_date: '05-04-2013', duration:4, progress: 0.2, open: true, parent:3},
      ],
      links:[
        {id: 1, source: 1, target: 2, type: '1'},
        {id: 2, source: 1, target: 3, type: '1'},
        {id: 3, source: 3, target: 4, type: '1'},
        {id: 4, source: 4, target: 5, type: '0'},
        {id: 5, source: 5, target: 6, type: '0'},
      ],
    };
    global.gantt.parse(global.demoTasks);
  }

  render() {
    const { todos, startedTodos, completedTodos, actions } = this.props;
    const style = { overflow: 'scroll', height: '80vh' };
    const ganttStyle = { width: '100%', height: '100%' };
    return (
      <Tabs>
        <Tab label='ToDo'>
          <div className='TodoApp' style={style}>
            {todos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </div>
        </Tab>
        <Tab label='Doing' >
          <div className='TodoApp' style={style}>
            {startedTodos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </div>
        </Tab>
        <Tab label='Done'>
          <div className='TodoApp' style={style}>
            {completedTodos.map(todo =>
              <TodoItem key={todo._id} todo={todo} {...actions} />
            )}
          </div>
        </Tab>
        <Tab label='Gantt'>
          <div className='TodoApp' style={style}>
            <div id='gantt_here' style={ganttStyle}></div>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
