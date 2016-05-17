import React from 'react';
import classnames from 'classnames';

import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class TodoEdit extends React.Component {
  static propTypes = {
    onSave: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
    editing: React.PropTypes.bool,
    newTodo: React.PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    const style = {
      marginRight: 20,
    };
    return (
      <div>
        <TextField
          className={classnames({
            'edit': this.props.editing,
            'new-todo': this.props.newTodo,
          })}
          type='text'
          hintText="Add Todo"
          autoFocus='true'
          value={this.state.text}
          onBlur={::this.handleBlur}
          onChange={::this.handleChange}
          onKeyDown={::this.handleSubmit} />
        <FloatingActionButton mini={true} style={style}>
          <ContentSend />
        </FloatingActionButton>
      </div>
    );
  }
}
