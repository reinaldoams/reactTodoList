import { Component }from 'react';
import reactDom from 'react-dom';
import TodoCreator from './TodoCreator';
import TodoList from './TodoList';
import './styles.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {todo: 'clean', id: Math.random() * Date.now()},
                {todo: 'wake up', id: Math.random() * Date.now()},
                {todo: 'wash dishes', id: Math.random() * Date.now()}
            ]
        }
    }

    handleCreation = (newTodo) => {
        console.log(newTodo)
        console.log('creating...')
        this.setState(state => {
            return {todos: [...state.todos, {todo: newTodo, id: Math.random() * Date.now()}]}
        })
    }

    handleDelete = (id) => {
        this.setState(state => {
            return {todos: state.todos.filter(todo => todo.id !== id)}
        })
    }

    handleEditSubmit = (id, todoEdited) => {
        this.setState(state => {
            const newState = state.todos.map(todo => {
                if(todo.id === id){
                    todo.todo = todoEdited  
                }
            })
            return newState
        })
    }

    render() {
        return (
            <div className="App">
                <TodoCreator handleCreation={this.handleCreation} />
                <TodoList todos={this.state.todos} handleDelete={this.handleDelete} handleEditSubmit={this.handleEditSubmit} />
            </div>
        )
    }
}

reactDom.render(<App />, document.querySelector('#root'))