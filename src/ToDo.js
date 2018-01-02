import React, { Component } from 'react'

import ToDoList from './ToDoList'
import ToDoBox from './ToDoBox'

class ToDo extends Component {

    state = {
        tasks: []
    };

    addTask = (taskContent) => {
        const symbols = ['[!]', '***'];
        if (symbols.some(char => taskContent.includes(char))) {
            symbols.forEach(
                symbol => taskContent = taskContent.replace(symbol, '')
            )
        }
        if (taskContent.trim() === '') {
            throw new Error('Task content cannot be empty');
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

    deleteTasks = (taskIds) => {
        this.setState({
            tasks: this.state.tasks.filter(
                task => !taskIds.includes(task.id)
            )
        })
    };


    handleDeleteClick = event => {
        console.log(event.target.dataset.taskId);
        this.setState({
            tasks: this.state.tasks.filter(
                task => task.id !== parseInt(event.target.dataset.taskId, 10)
            )
        })
    };

    render() {
        return (
            <div>

                <ToDoBox
                    addTask={this.addTask}
                />

                <ToDoList
                    tasks={this.state.tasks}
                    deleteTasks={this.deleteTasks}
                    handleDeleteClick={this.handleDeleteClick}
                />
            </div>
        )
    }
}

export default ToDo