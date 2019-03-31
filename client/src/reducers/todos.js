import types from '../actions/todos';

export default function reducer(state, action) {
    switch (action.type) {
        case types.LOAD:
            return action.payload.todos;
        case types.RESET:
            return [];
        case types.ADD:
            return [
                ...state,
                {
                    id: Number(new Date()),
                    task: '',
                    completed: false
                }
            ];
        case types.DELETE:
            return state.filter(todo => todo.id !== action.payload.id);
        case types.COMPLETE:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
        case types.UPDATE:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        text: action.payload.text
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};