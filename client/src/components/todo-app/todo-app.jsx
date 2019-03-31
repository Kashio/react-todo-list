import React, {useReducer} from 'react';
import './todo-app.scss';
import reducer from '../../reducers/todos';
import types from '../../actions/todos';
import TodoContext from './todos-app.context';
import TodoList from '@/todo-list/todo-list';
import useLocalStorage from '../../hooks/useLocalStorage';

const INITIAL_STATE = {
    filter: '',
    items: []
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(reducer, INITIAL_STATE);

    const load = todos => {
        let loadedTodos = INITIAL_STATE;
        if (todos) {
            loadedTodos = todos;
        }
        dispatch({type: types.RESET, payload: loadedTodos});
    };

    useLocalStorage('todos', todos, load, [todos]);

    const add = () => {
      dispatch({type: types.ADD});
    };

    const reset = () => {
        dispatch({type: types.RESET, payload: INITIAL_STATE});
    };

    const filter = e => {
        dispatch({type: types.FILTER, payload: {filter: e.target.value}})
    };

    const filteredTodos = () => {
      return todos.items.filter(item => item.task.includes(todos.filter));
    };

    return (
        <TodoContext.Provider value={dispatch}>
            <TodoList todos={filteredTodos()}/>
            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button>
            <input type="text" name="filter" value={todos.filter} onChange={filter}/>
        </TodoContext.Provider>
    );
};

export default TodoApp;