import React, {useContext} from 'react';
import './todo-item.scss';
import types from '../../actions/todos';
import TodoContext from '../todo-app/todos-app.context';

const TodoItem = ({id, task, completed}) => {
    console.log('render todo item with id: ', id);
    const dispatch = useContext(TodoContext);

    const update = () => {
      dispatch({type: types.UPDATE, payload: {id, task: event.target.value}});
    };

    const complete = () => {
        dispatch({type: types.COMPLETE, payload: {id}});
    };

    const remove = () => {
        dispatch({type: types.DELETE, payload: {id}});
    };

    return (
        <div className="todo-item">
            <input type="checkbox" name="completed" checked={completed} onChange={complete}/>
            <input type="text" name="text" value={task} onChange={update}/>
            <button onClick={remove}>Delete</button>
        </div>
    );
};

export default React.memo(TodoItem);