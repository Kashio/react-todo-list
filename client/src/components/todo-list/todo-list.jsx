import React, {useContext, useReducer} from 'react';
import './todo-list.scss';
import reducer from '../../reducers/todos';
import types from '../../actions/todos';

const TodoListContext = React.createContext();

const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, [])

    return <ul className='todo-list'>

    </ul>;
};

export default TodoList;