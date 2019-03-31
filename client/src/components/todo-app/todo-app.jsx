import React, {useReducer} from 'react';
import './todo-app.scss';
import reducer from '../../reducers/todos';
import types from '../../actions/todos';
import TodoContext from './todos-app.context';
import TodoList from '@/todo-list/todo-list';


const TodoApp = () => {
    const [todos, dispatch] = useReducer(reducer, []);

    const add = () => {
      dispatch({type: types.ADD});
    };

    const reset = () => {
        dispatch({type: types.RESET});
    };

    return (
        <TodoContext.Provider value={dispatch}>
            <TodoList todos={todos}/>
            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button>
        </TodoContext.Provider>
    );
};

export default TodoApp;