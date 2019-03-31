import React, {useContext} from 'react';
import './todo-item.scss';
import types from '../../actions/todos';
import TodoContext from '../todo-app/todos-app.context';

const TodoItem = ({id, text, completed}) => {
    const dispatch = useContext(TodoContext);

    const remove = () => {
      dispatch({type: types.DELETE, payload: {id}});
    };

    const complete = () => {
        dispatch({type: types.COMPLETE, payload: {id}});
    };

    return (
        <div className="todo-item">
            <input type="checkbox" name="completed" value={completed} onChange={complete}/>
            <input type="text" name="text"/>
            <button onClick={remove}>Delete</button>
        </div>
    );
};

export default TodoItem;