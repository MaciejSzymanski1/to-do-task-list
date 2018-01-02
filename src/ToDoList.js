import React, { Component } from 'react'

class ToDoList extends Component {
    state = {
        checkedTaskIds: []
    };

    componentWillMount() {
        this.setState({
            checkedTaskIds: JSON.parse(localStorage.getItem('checkedTaskIds')) || []
        })
    }

    componentDidUpdate() {
        localStorage.setItem('checkedTaskIds', JSON.stringify(this.state.checkedTaskIds))
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.tasks.map(
                            task => (
                                <li key={task.id}>
                                    {task.content}

                                    <button
                                        data-task-id={task.id}
                                        onClick={this.props.handleDeleteClick}
                                    >
                                        delete
                                    </button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList