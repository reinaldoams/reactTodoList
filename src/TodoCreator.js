import { Component } from 'react';

class TodoCreator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    handleChange = (evt) => {
        this.setState({input: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.handleCreation(this.state.input)
        this.setState({input: ''})
    }

    render() {
        return (
            <form className="TodoCreator" onSubmit={this.handleSubmit}>
                <label htmlFor="todo"></label>
                <input id="todo" onChange={this.handleChange} value={this.state.input}></input>
                <button>Create Todo</button>
            </form>
        )
    }
}

export default TodoCreator