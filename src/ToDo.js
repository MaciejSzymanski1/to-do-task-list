import React, { Component } from 'react'

import ToDoList from './ToDoList'
import ToDoBox from './ToDoBox'

class ToDo extends Component {

    state = {
        tasks: []
    };

    addTask = (taskContent) => {
        if (taskContent.trim() === '') {
        }
        this.setState({
            tasks: this.state.tasks.concat({
                id: this.state.tasks.map(
                    task => task.id
                ).reduce(
                    (biggest, next) => Math.max(biggest, next),
                    0
                ) + 1,
                content: taskContent
            })
        });
    };

    componentWillMount() {
        this.setState({
            tasks: JSON.parse(localStorage.getItem('tasks')) || []
        })
    }

    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    handleDeleteClick = event => {
        this.setState({
            tasks: this.state.tasks.filter(
                task => task.id !== parseInt(event.target.dataset.taskId, 10)
            )
        })
    };

    render() {
        const todosName = this.state.tasks.filter(
            task =>
                task.content.includes(
                    this.props.BySearch
                )
        );
        return (
            <div>
                <ToDoBox
                    addTask={this.addTask}
                />

                <ToDoList
                    tasks={todosName}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        )
    }
}

export default ToDo