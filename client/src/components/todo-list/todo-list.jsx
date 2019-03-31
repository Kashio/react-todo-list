import React, {useContext, useReducer} from 'react';
import './todo-list.scss';
import reducer from '../../reducers/todos';
import types from '../../actions/todos';
import TodoItem from '@/todo-item/todo-item';

const TodoListContext = React.createContext();

const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, []);

    const add = () => {
      dispatch({type: types.ADD});
    };

    const reset = () => {
        dispatch({type: types.RESET});
    };

    return (
        <TodoListContext.Provider value={dispatch}>
            <div className='todo-list'>
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
                }
            </div>
            <button onClick={add}>Add</button>
            <button onClick={reset}>Reset</button>
        </TodoListContext.Provider>
    );
};

export default TodoList;