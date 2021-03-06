/* global Todos ReactMeteorData */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import * as TodoAction from 'dir_src/actions/Todo';
import TodoApp from 'dir_src/components/TodoApp';
import TodoAdd from 'dir_src/components/TodoAdd';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const actionCreators = {
  ...TodoAction,
};

function mapStateToProps(state) {
  return {
    routerState: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export class HomeView extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object,
  }

  constructor() {
    super();
  }

  getMeteorData() {
    return {
      todos: Todos.find({started: false, completed: false}).fetch(),
      startedTodos: Todos.find({started: true, completed: false}).fetch(),
      completedTodos: Todos.find({completed: true}).fetch(),
    };
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className='HomeView'>
          <TodoApp
            todos={this.data.todos}
            startedTodos={this.data.startedTodos}
            completedTodos={this.data.completedTodos}
            actions={this.props.actions} />
          <TodoAdd addTodo={this.props.actions.addTodo} />
        </div>
      </MuiThemeProvider>
    );
  }
}

const HomeViewWithMixin = reactMixin.decorate(ReactMeteorData)(HomeView);
export default connect(mapStateToProps, mapDispatchToProps)(HomeViewWithMixin);

// {JSON.stringify(this.data.todos)}

