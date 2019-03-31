import types from '../actions/todos';

export default function reducer(state, action) {
    switch (action.type) {
        case types.RESET:
            return {
                filter: action.payload.filter,
                items: action.payload.items
            };
        case types.ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: Number(new Date()),
                        task: '',
                        completed: false
                    }
                ]
            };
        case types.DELETE:
            return {
                ...state,
                items: state.items.filter(todo => todo.id !== action.payload.id)
            };
        case types.COMPLETE:
            return {
                ...state,
                items: state.items.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }
                    return todo;
                })
            };
        case types.UPDATE:
            return {
                ...state,
                items: state.items.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            task: action.payload.task
                        };
                    }
                    return todo;
                })
            };
        case types.FILTER:
            return {
                ...state,
                filter: action.payload.filter
            };
        default:
            return state;
    }
};