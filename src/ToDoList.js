import React, { Component } from 'react'

class ToDoList extends Component {
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