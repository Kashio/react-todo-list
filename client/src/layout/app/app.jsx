import React from 'react';
import './app.scss';
import TodoList from '@/todo-list/todo-list';

const App = () => {
    return (
        <div className="app">
            <main>
                <TodoList/>
            </main>
        </div>
    );
};

export default App;