import { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    
    render() {
        return (
            <div className="TodoList">
                {this.props.todos.map(todo => {
                    return (<TodoItem
                    id={todo.id} key={todo.id} todo={todo.todo}
                    handleDelete={this.props.handleDelete}
                    handleEditSubmit={this.props.handleEditSubmit}
                    />)})}
            </div>
        )
    }
}

export default TodoList;