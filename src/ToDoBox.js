import React, { Component } from 'react'

class ToDoBox extends Component {
    state = {
        taskInputValue: ''
    };

    handleChange = (event) => {
        this.setState({
            taskInputValue: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
            this.props.addTask(
                this.state.taskInputValue
            );
        this.setState({
            taskInputValue: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.taskInputValue}
                    onChange={this.handleChange}
                />
                <button>Add task</button>
            </form>
        )
    }
}

export default ToDoBox