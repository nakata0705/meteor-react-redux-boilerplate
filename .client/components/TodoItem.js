import React from 'react';
// import TodoEdit from 'dir_src/components/TodoEdit';

// import {ListItem} from 'material-ui/List';
// import Checkbox from 'material-ui/Checkbox';
// import {grey400} from 'material-ui/styles/colors';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import StopIcon from 'material-ui/svg-icons/av/stop';
import PlayArrowIcon from 'material-ui/svg-icons/av/play-arrow';
import DoneIcon from 'material-ui/svg-icons/action/done';
import {Card, CardText, CardActions} from 'material-ui/Card';
// import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: React.PropTypes.object.isRequired,
    // editTodo: React.PropTypes.func.isRequired,
    // deleteTodo: React.PropTypes.func.isRequired,
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
      // this.props.deleteTodo(id);
    } else {
      // this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }
  render() {
    const {todo, completeTodo} = this.props;
    let display = 'block';
    if (todo.completed === true) {
      display = 'none';
    }
    return (
      <Card style={{display: display}}>
        <CardText>
          {todo.text + todo._id}
        </CardText>
        <CardActions>
          <FlatButton icon={<StopIcon />} />
          <FlatButton icon={<PlayArrowIcon />} />
          <FlatButton icon={<DoneIcon />} onClick={() => completeTodo(todo._id)}/>
        </CardActions>
      </Card>
    );
  }
}
/*             <button
              className='destroy'
              onClick={() => deleteTodo(todo._id)}>x</button>
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
*/
