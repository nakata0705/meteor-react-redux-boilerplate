import React from 'react';
import TodoEdit from 'dir_src/components/TodoEdit';

import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {grey400} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    editTodo: React.PropTypes.func.isRequired,
    deleteTodo: React.PropTypes.func.isRequired,
    completeTodo: React.PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  handleStartEdit() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;
    const iconButtonElement = (
      <IconButton>
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    return (
      <ListItem
        leftCheckbox={<Checkbox checked={todo.completed} onCheck={() => completeTodo(todo._id)} />}
        rightIconButton={<IconMenu iconButtonElement={iconButtonElement}>
          <MenuItem onClick={() => this.handleStartEdit()}>Edit</MenuItem>
          <MenuItem onClick={() => deleteTodo(todo._id)}>Delete</MenuItem>
        </IconMenu>}
        primaryText={this.state.editing ?
          <TodoEdit
            text={todo.text}
            editing={this.state.editing}
            onSave={(text) => this.handleSave(todo._id, text)} /> :
          <div className='view'>
            {todo.text}
          </div>}
      />
    );
  }
}
/*             <button
              className='destroy'
              onClick={() => deleteTodo(todo._id)}>x</button>
*/
