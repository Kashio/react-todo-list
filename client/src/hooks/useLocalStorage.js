import {useEffect} from 'react';

export default function useLocalStorage(name, data, dependencies) {
    useEffect(() => {
        return () => {
            window.localStorage.setItem(name, data);
        };
    }, dependencies);
    return window.localStorage.getItem(name);
};