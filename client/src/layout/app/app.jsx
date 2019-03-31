import React from 'react';
import './app.scss';
import TodoApp from '@/todo-app/todo-app';

const App = () => {
    return (
        <div className="app">
            <main>
                <TodoApp/>
            </main>
        </div>
    );
};

export default App;