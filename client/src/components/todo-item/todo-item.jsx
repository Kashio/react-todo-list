import React, {useContext} from 'react';
import './todo-item.scss';
import types from '../../actions/todos';
import TodoContext from '../todo-app/todos-app.context';

const TodoItem = ({id, text, completed}) => {
    const dispatch = useContext(TodoContext);

    const update = () => {
      dispatch({type: types.UPDATE, payload: {id, text: event.target.value}});
    };

    const complete = () => {
        dispatch({type: types.COMPLETE, payload: {id}});
    };

    const remove = () => {
        dispatch({type: types.DELETE, payload: {id}});
    };

    return (
        <div className="todo-item">
            <input type="checkbox" name="completed" value={completed} onChange={complete}/>
            <input type="text" name="text" onChange={update}/>
            <button onClick={remove}>Delete</button>
        </div>
    );
};

export default TodoItem;