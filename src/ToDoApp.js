import React, { Component } from 'react';
import ToDo from './ToDo';
import FilterMethod from './FilterMethod';

class ToDoApp extends Component {
    state={
        BySearch: ''
    };

    onSearch = (text) => {
        this.setState({
            BySearch: text
        })
    };

    render() {
        return (
            <div>
                <ToDo
                BySearch={this.state.BySearch}
                />

                <FilterMethod
                    onSearch={this.onSearch}
                />

            </div>
        );
    }
}

export default ToDoApp;
