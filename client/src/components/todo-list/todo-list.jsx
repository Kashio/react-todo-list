import React from 'react';
import './todo-list.scss';
import TodoItem from '@/todo-item/todo-item';

const TodoList = ({todos}) => {
    return (
        <div className="todo-list">
            {
                todos.map(todo => <TodoItem key={todo.id} {...todo} />)
            }
        </div>
    );
};

export default TodoList;