import {useEffect} from 'react';

export default function useLocalStorage(name, item, onLoad) {
    useEffect(() => {
        onLoad(JSON.parse(window.localStorage.getItem(name)));
    }, []);
    useEffect(() => {
        window.localStorage.setItem(name, JSON.stringify(item));
    }, [item]);
};