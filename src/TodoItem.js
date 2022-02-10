import { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editInput: '',
            showEditInput: false,
            checked: false
        }
    }

    handleEditChange = (evt) => {
        this.setState(state => {
            return {
                editInput: evt.target.value
            }
        })
    }

    handleEditSubmit = evt => {
        evt.preventDefault()
        this.props.handleEditSubmit(this.props.id, this.state.editInput)
        this.setState({showEditInput: false})
    }

    toggleEditInput = evt => {
        this.setState(state => {
            return {editInput: this.props.todo, showEditInput: !state.showEditInput}
        })
    }

    handleCheck = () => {
        this.setState(state => {return {checked: !state.checked}})
    }

    render() {
        return (
            <div id={this.props.id} className="TodoItem">
                <span className={this.state.checked ? 'checked' : ''}>
                <p className={this.state.showEditInput ? 'editHidden' : ''}>Todo: {this.props.todo}</p>
                </span>

                <form onSubmit={this.handleEditSubmit}>
                        <div className={this.state.showEditInput ? '' : 'editHidden'} >
                            <input onChange={this.handleEditChange} value={this.state.editInput} />
                            <button>Confirm</button>
                        </div>
                        <button className={this.state.showEditInput ? 'cancel-button' : 'editHidden'} onClick={this.toggleEditInput}>Cancel</button>
                </form>

                <button className={this.state.showEditInput ? 'editHidden' : ''} onClick={this.toggleEditInput}>Edit</button>
                <button onClick={() => this.handleCheck()}>check</button>
                <button onClick={() => this.props.handleDelete(this.props.id)}>delete</button>
            </div>
        )
    }
}

export default TodoItem