import types from '../actions/todos';

export default function reducer(state, action) {
    switch (action.type) {
        case types.RESET:
            return [];
        case types.ADD:
            return [
                ...state,
                action.payload.todo
            ];
        case types.DELETE:
            return state.filter(todo => todo.id !== action.payload.id);
        case types.COMPLETE:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};